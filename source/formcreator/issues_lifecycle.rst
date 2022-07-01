Issues lifecycle
----------------

Abstract
^^^^^^^^

The service catalog relies mostly on a list of issues (or assitance request). Issues are created and maintained upon events related to tickets and form answers.

When a ticket is created from GLPI, then a new issue is created in the database. When this ticket is being updated, the issue is updated to reflect all relevant changes.

Form answers are created when a requester fills a form and submits it. When a form answer is created a new issue is created as well. As a form answer may or may not trigger the creation of tickets, issues behave differently depending on this quantity of generated tickets.


Ticket created from GLPI
^^^^^^^^^^^^^^^^^^^^^^^^

When a ticket is created from GLPI, the issue reflects most useful information from this ticket.

Form answer without any generated ticket
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When a form answer did not generate a ticket, or when the form answer generating tickets is waiting for validation, then the issue reflects the form answer.

Form answer with a single generated ticket
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When a form answer trigered the creation of one and only one ticket, then the issue reflects this ticket. This is also true when the approval of a form answer triggers the creation of a single ticket.

Form answer with several generated tickets
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

When a form answer generated several tickets, then the issue reflects a list of those tickets. Each ticket is viewable by the requester, if he is granted to view it.


Status
^^^^^^

Computation of status
"""""""""""""""""""""

Issues follow the lifecycle of tickets or form answers, depending on which object it reflects.

When an issue reflects a single ticket, its status takes into account the validation status of a ticket, if any.  The  validation status of the ticket takes precedence when the ticket is not solved and waiting for approval or has been refused. For all other cases, the issue shows the regular ticket status.

You may refer to the following table to have a quick view of how the status is computed:

+--------------------------+-------------+---------+---------+----------+
|                          |              Validation Status             |
+                          +-------------+---------+---------+----------+
|                          |     NONE    | WAITING | REFUSED | ACCEPTED |
+===============+==========+=============+=========+=========+==========+
|               | INCOMING |      T      |    V    |    V    |     T    |
+               +----------+-------------+---------+---------+----------+
|               | ASSIGNED |      T      |    V    |    V    |     T    |
+               +----------+-------------+---------+---------+----------+
| Ticket        | PLANNED  |      T      |    V    |    V    |     T    |
+               +----------+-------------+---------+---------+----------+
| Status        | WAITING  |      T      |    V    |    V    |     T    |
+               +----------+-------------+---------+---------+----------+
|               | SOLVED   |      T      |    T    |    T    |     T    |
+               +----------+-------------+---------+---------+----------+
|               | CLOSED   |      T      |    T    |    T    |     T    |
+---------------+----------+-------------+---------+---------+----------+

- T = status picked from Ticket
- V = status picked from Validation

When an issue reflects several tickets then the status of each ticket is computed from the above description, and the least advanced status is used. If an issue reflects 3 tickets having statuses Waiting, Resolved and Closed, then the choosen status is Waiting. This means that an issue is closed oly when all its tickets are closed.

searching issues by status
""""""""""""""""""""""""""

The search engine shows many statuses. Some are shortcuts to search several statuses at once, like tickets, some are specific to the statuses of form answers.

- new: new issues
- processing (assigned): processing issues
- processing (planned): planned issues
- waiting: issues waiting for information from requester or waiting for validation by a valdiator
- solved: issues solved or refused by a validator
- closed: issues closed or accepted by a validator (this happens when no ticket has been generated after validation)
- not solved: all statuses but solved or closed
- not closed: all statuses but closed
- solved + closed: issues solved or closed
- all: any status
- accepted: issues accepted by a validator
- refused: isses refused by a validator
-