.. default-domain:: nscp

.. module:: CheckWMI
    :synopsis: Check status via WMI

===============================
:module:`CheckWMI` --- CheckWMI
===============================
Check status via WMI

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_wmi` | Check a set of WMI values and return rows which are matching criteria.


**Aliases (Overview)**:

A list of all short hand aliases for queries (check commands)



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    checkwmi | Alias for: :query:`check_wmi`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:






Queries
=======
A quick reference for all available queries (check commands) in the CheckWMI module.

:query:`check_wmi`
------------------
.. query:: check_wmi
    :synopsis: Check a set of WMI values and return rows which are matching criteria.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` |  | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` |  | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | CPU Load ok | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${list} | Top level syntax.
    :option:`detail-syntax` | CHANGE ME | Detail level syntax.
    :option:`perf-syntax` |  | Performance alias syntax.
    :option:`target` |  | The target to check (for checking remote machines).
    :option:`user` |  | Remote username when checking remote machines.
    :option:`password` |  | Remote password when checking remote machines.
    :option:`namespace` | root\cimv2 | The WMI root namespace to bind to.
    :option:`query` |  | The WMI query to execute.


Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state but they are checked use this to filter out unwanted items.
    | Available options:

    | ============== =============================================================================== 
    | Key            Value                                                                           
    | -------------- ------------------------------------------------------------------------------- 
    | count          Number of items matching the filter                                             
    | total           Total number of items                                                          
    | ok_count        Number of items matched the ok criteria                                        
    | warn_count      Number of items matched the warning criteria                                   
    | crit_count      Number of items matched the critical criteria                                  
    | problem_count   Number of items matched either warning or critical criteria                    
    | list            A list of all items which matched the filter                                   
    | ok_list         A list of all items which matched the ok criteria                              
    | warn_list       A list of all items which matched the warning criteria                         
    | crit_list       A list of all items which matched the critical criteria                        
    | problem_list    A list of all items which matched either the critical or the warning criteria  
    | status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    | ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    | ============== =============================================================================== 
    | Key            Value                                                                           
    | -------------- ------------------------------------------------------------------------------- 
    | count          Number of items matching the filter                                             
    | total           Total number of items                                                          
    | ok_count        Number of items matched the ok criteria                                        
    | warn_count      Number of items matched the warning criteria                                   
    | crit_count      Number of items matched the critical criteria                                  
    | problem_count   Number of items matched either warning or critical criteria                    
    | list            A list of all items which matched the filter                                   
    | ok_list         A list of all items which matched the ok criteria                              
    | warn_list       A list of all items which matched the warning criteria                         
    | crit_list       A list of all items which matched the critical criteria                        
    | problem_list    A list of all items which matched either the critical or the warning criteria  
    | status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    | ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    | ============== =============================================================================== 
    | Key            Value                                                                           
    | -------------- ------------------------------------------------------------------------------- 
    | count          Number of items matching the filter                                             
    | total           Total number of items                                                          
    | ok_count        Number of items matched the ok criteria                                        
    | warn_count      Number of items matched the warning criteria                                   
    | crit_count      Number of items matched the critical criteria                                  
    | problem_count   Number of items matched either warning or critical criteria                    
    | list            A list of all items which matched the filter                                   
    | ok_list         A list of all items which matched the ok criteria                              
    | warn_list       A list of all items which matched the warning criteria                         
    | crit_list       A list of all items which matched the critical criteria                        
    | problem_list    A list of all items which matched either the critical or the warning criteria  
    | status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    | ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    | ============== =============================================================================== 
    | Key            Value                                                                           
    | -------------- ------------------------------------------------------------------------------- 
    | count          Number of items matching the filter                                             
    | total           Total number of items                                                          
    | ok_count        Number of items matched the ok criteria                                        
    | warn_count      Number of items matched the warning criteria                                   
    | crit_count      Number of items matched the critical criteria                                  
    | problem_count   Number of items matched either warning or critical criteria                    
    | list            A list of all items which matched the filter                                   
    | ok_list         A list of all items which matched the ok criteria                              
    | warn_list       A list of all items which matched the warning criteria                         
    | crit_list       A list of all items which matched the critical criteria                        
    | problem_list    A list of all items which matched either the critical or the warning criteria  
    | status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    | ============== ===============================================================================





.. option:: empty-syntax
    :synopsis: Message to display when nothing matched filter.

    | Message to display when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include strings as well as special keywords such as:

    | ================= =============================================================================== 
    | Key               Value                                                                           
    | ----------------- ------------------------------------------------------------------------------- 
    | ${count}          Number of items matching the filter                                             
    | ${total}           Total number of items                                                          
    | ${ok_count}        Number of items matched the ok criteria                                        
    | ${warn_count}      Number of items matched the warning criteria                                   
    | ${crit_count}      Number of items matched the critical criteria                                  
    | ${problem_count}   Number of items matched either warning or critical criteria                    
    | ${list}            A list of all items which matched the filter                                   
    | ${ok_list}         A list of all items which matched the ok criteria                              
    | ${warn_list}       A list of all items which matched the warning criteria                         
    | ${crit_list}       A list of all items which matched the critical criteria                        
    | ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    | ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    | ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    | ================= =============================================================================== 
    | Key               Value                                                                           
    | ----------------- ------------------------------------------------------------------------------- 
    | ${count}          Number of items matching the filter                                             
    | ${total}           Total number of items                                                          
    | ${ok_count}        Number of items matched the ok criteria                                        
    | ${warn_count}      Number of items matched the warning criteria                                   
    | ${crit_count}      Number of items matched the critical criteria                                  
    | ${problem_count}   Number of items matched either warning or critical criteria                    
    | ${list}            A list of all items which matched the filter                                   
    | ${ok_list}         A list of all items which matched the ok criteria                              
    | ${warn_list}       A list of all items which matched the warning criteria                         
    | ${crit_list}       A list of all items which matched the critical criteria                        
    | ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    | ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    | ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    | ================= =============================================================================== 
    | Key               Value                                                                           
    | ----------------- ------------------------------------------------------------------------------- 
    | ${count}          Number of items matching the filter                                             
    | ${total}           Total number of items                                                          
    | ${ok_count}        Number of items matched the ok criteria                                        
    | ${warn_count}      Number of items matched the warning criteria                                   
    | ${crit_count}      Number of items matched the critical criteria                                  
    | ${problem_count}   Number of items matched either warning or critical criteria                    
    | ${list}            A list of all items which matched the filter                                   
    | ${ok_list}         A list of all items which matched the ok criteria                              
    | ${warn_list}       A list of all items which matched the warning criteria                         
    | ${crit_list}       A list of all items which matched the critical criteria                        
    | ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    | ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    | ================= ===============================================================================





.. option:: target
    :synopsis: The target to check (for checking remote machines).

    | The target to check (for checking remote machines).

.. option:: user
    :synopsis: Remote username when checking remote machines.

    | Remote username when checking remote machines.

.. option:: password
    :synopsis: Remote password when checking remote machines.

    | Remote password when checking remote machines.

.. option:: namespace
    :synopsis: The WMI root namespace to bind to.

    | The WMI root namespace to bind to.

.. option:: query
    :synopsis: The WMI query to execute.

    | The WMI query to execute.






/ settings/ targets
-------------------

.. confpath:: /settings/targets
    :synopsis: TARGET LIST SECTION

**TARGET LIST SECTION**

    | A list of available remote target systems




    **Sample**::

        # TARGET LIST SECTION
        # A list of available remote target systems
        [/settings/targets]


