.. default-domain:: nscp

.. module:: CheckNSCP
    :synopsis: Use this module to check the healt and status of NSClient++ it self

=================================
:module:`CheckNSCP` --- CheckNSCP
=================================
Use this module to check the healt and status of NSClient++ it self

**Queries (Overview)**:

A list of all avalible queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_nscp` | Check the internal healt of NSClient++.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)



Queries
=======
A quick reference for all avalible queries (check commands) in the CheckNSCP module.

:query:`check_nscp`
-------------------
.. query:: check_nscp
    :synopsis: Check the internal healt of NSClient++.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-csv
    :synopsis: Show help screen as a comma separated list. 

    | Show help screen as a comma separated list. 
    | This is useful for parsing the output in scripts and generate documentation etc

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).




