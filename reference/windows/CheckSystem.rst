.. default-domain:: nscp

.. module:: CheckSystem
    :synopsis: Various system related checks, such as CPU load, process state, service state memory usage and PDH counters.

=====================================
:module:`CheckSystem` --- CheckSystem
=====================================
Various system related checks, such as CPU load, process state, service state memory usage and PDH counters.

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_cpu` | Check that the load of the CPU(s) are within bounds.
    :query:`check_memory` | Check free/used memory on the system.
    :query:`check_os_version` | Check the version of the underlaying OS.
    :query:`check_pagefile` | Check the size of the system pagefile(s).
    :query:`check_pdh` | Check the value of a performance (PDH) counter.
    :query:`check_process` | Check state/metrics of one or more of the processes running on the computer.
    :query:`check_service` | Check the state of one or more of the computer services.
    :query:`check_uptime` | Check time since last server re-boot.
    :query:`checkcounter` | Legacy version of check_pdh
    :query:`checkcpu` | Legacy version of check_cpu
    :query:`checkmem` | Legacy version of check_mem
    :query:`checkprocstate` | Legacy version of check_process
    :query:`checkservicestate` | Legacy version of check_service
    :query:`checkuptime` | Legacy version of check_uptime


**Aliases (Overview)**:

A list of all short hand aliases for queries (check commands)



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    check_counter | Alias for: :query:`check_pdh`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/system/windows` | :confkey:`~/settings/system/windows.default buffer length` | DEFAULT LENGTH

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/system/windows` | :confkey:`~/settings/system/windows.subsystem` | PDH SUBSYSTEM

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.alias` | ALIAS
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.check` | TYPE OF CHECK
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.command` | COMMAND NAME
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.critical` | CRITICAL FILTER
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.debug` | DEBUG
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.destination` | DESTINATION
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.detail syntax` | SYNTAX
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.empty message` | EMPTY MESSAGE
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.filter` | FILTER
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.is template` | IS TEMPLATE
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.maximum age` | MAGIMUM AGE
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.ok` | OK FILTER
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.ok syntax` | SYNTAX
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.parent` | PARENT
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.perf config` | PERF CONFIG
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.severity` | SEVERITY
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.target` | DESTINATION
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.time` | TIME
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.times` | FILES
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.top syntax` | SYNTAX
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.warning` | WARNING FILTER


Queries
=======
A quick reference for all available queries (check commands) in the CheckSystem module.

:query:`check_cpu`
------------------
.. query:: check_cpu
    :synopsis: Check that the load of the CPU(s) are within bounds.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | core = 'total' | Filter which marks interesting items.
    :option:`warning` | load > 80 | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | load > 90 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${problem_list} | Top level syntax.
    :option:`ok-syntax` | %(status): CPU load is ok. | ok syntax.
    :option:`empty-syntax` |  | Empty syntax.
    :option:`detail-syntax` | ${time}: ${load}% | Detail level syntax.
    :option:`perf-syntax` | ${core} ${time} | Performance alias syntax.
    :option:`time` |  | The time to check



Samples
*******

.. include:: ../../samples/CheckSystem_check_cpu_samples.inc



Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    core           The core to check (total or core ##)                                            
    core_id        The core to check (total or core_##)                                            
    idle           The current idle load for a given core                                          
    kernel         The current kernel load for a given core                                        
    load           The current load for a given core                                               
    time           The time frame to check                                                         
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    core           The core to check (total or core ##)                                            
    core_id        The core to check (total or core_##)                                            
    idle           The current idle load for a given core                                          
    kernel         The current kernel load for a given core                                        
    load           The current load for a given core                                               
    time           The time frame to check                                                         
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    core           The core to check (total or core ##)                                            
    core_id        The core to check (total or core_##)                                            
    idle           The current idle load for a given core                                          
    kernel         The current kernel load for a given core                                        
    load           The current load for a given core                                               
    time           The time frame to check                                                         
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    core           The core to check (total or core ##)                                            
    core_id        The core to check (total or core_##)                                            
    idle           The current idle load for a given core                                          
    kernel         The current kernel load for a given core                                        
    load           The current load for a given core                                               
    time           The time frame to check                                                         
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





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

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(core)           The core to check (total or core ##)                                            
    %(core_id)        The core to check (total or core_##)                                            
    %(idle)           The current idle load for a given core                                          
    %(kernel)         The current kernel load for a given core                                        
    %(load)           The current load for a given core                                               
    %(time)           The time frame to check                                                         
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: ok-syntax
    :synopsis: ok syntax.

    | ok syntax.
    | DEPRECATED! This is the syntax for when an ok result is returned.
    | This value will not be used if your syntax contains %(list) or %(count).

.. option:: empty-syntax
    :synopsis: Empty syntax.

    | Empty syntax.
    | DEPRECATED! This is the syntax for when nothing matches the filter.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(core)           The core to check (total or core ##)                                            
    %(core_id)        The core to check (total or core_##)                                            
    %(idle)           The current idle load for a given core                                          
    %(kernel)         The current kernel load for a given core                                        
    %(load)           The current load for a given core                                               
    %(time)           The time frame to check                                                         
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(core)           The core to check (total or core ##)                                            
    %(core_id)        The core to check (total or core_##)                                            
    %(idle)           The current idle load for a given core                                          
    %(kernel)         The current kernel load for a given core                                        
    %(load)           The current load for a given core                                               
    %(time)           The time frame to check                                                         
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(core)           The core to check (total or core ##)                                            
    %(core_id)        The core to check (total or core_##)                                            
    %(idle)           The current idle load for a given core                                          
    %(kernel)         The current kernel load for a given core                                        
    %(load)           The current load for a given core                                               
    %(time)           The time frame to check                                                         
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: time
    :synopsis: The time to check

    | The time to check

:query:`check_memory`
---------------------
.. query:: check_memory
    :synopsis: Check free/used memory on the system.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | used > 80% | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | used > 90% | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${list} | Top level syntax.
    :option:`ok-syntax` |  | ok syntax.
    :option:`empty-syntax` |  | Empty syntax.
    :option:`detail-syntax` | ${type} = ${used} | Detail level syntax.
    :option:`perf-syntax` | ${type} | Performance alias syntax.
    :option:`type` |  | The type of memory to check (physical = Physical memory (RAM), committed = total memory (RAM+PAGE)



Samples
*******

.. include:: ../../samples/CheckSystem_check_memory_samples.inc



Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    free           Free memory in bytes (g,m,k,b) or percentages %                                 
    free_pct       % free memory                                                                   
    size           Total size of memory                                                            
    type           The type of memory to check                                                     
    used           Used memory in bytes (g,m,k,b) or percentages %                                 
    used_pct       % used memory                                                                   
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    free           Free memory in bytes (g,m,k,b) or percentages %                                 
    free_pct       % free memory                                                                   
    size           Total size of memory                                                            
    type           The type of memory to check                                                     
    used           Used memory in bytes (g,m,k,b) or percentages %                                 
    used_pct       % used memory                                                                   
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    free           Free memory in bytes (g,m,k,b) or percentages %                                 
    free_pct       % free memory                                                                   
    size           Total size of memory                                                            
    type           The type of memory to check                                                     
    used           Used memory in bytes (g,m,k,b) or percentages %                                 
    used_pct       % used memory                                                                   
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    free           Free memory in bytes (g,m,k,b) or percentages %                                 
    free_pct       % free memory                                                                   
    size           Total size of memory                                                            
    type           The type of memory to check                                                     
    used           Used memory in bytes (g,m,k,b) or percentages %                                 
    used_pct       % used memory                                                                   
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





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

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
    %(free_pct)       % free memory                                                                   
    %(size)           Total size of memory                                                            
    %(type)           The type of memory to check                                                     
    %(used)           Used memory in bytes (g,m,k,b) or percentages %                                 
    %(used_pct)       % used memory                                                                   
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: ok-syntax
    :synopsis: ok syntax.

    | ok syntax.
    | DEPRECATED! This is the syntax for when an ok result is returned.
    | This value will not be used if your syntax contains %(list) or %(count).

.. option:: empty-syntax
    :synopsis: Empty syntax.

    | Empty syntax.
    | DEPRECATED! This is the syntax for when nothing matches the filter.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
    %(free_pct)       % free memory                                                                   
    %(size)           Total size of memory                                                            
    %(type)           The type of memory to check                                                     
    %(used)           Used memory in bytes (g,m,k,b) or percentages %                                 
    %(used_pct)       % used memory                                                                   
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
    %(free_pct)       % free memory                                                                   
    %(size)           Total size of memory                                                            
    %(type)           The type of memory to check                                                     
    %(used)           Used memory in bytes (g,m,k,b) or percentages %                                 
    %(used_pct)       % used memory                                                                   
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
    %(free_pct)       % free memory                                                                   
    %(size)           Total size of memory                                                            
    %(type)           The type of memory to check                                                     
    %(used)           Used memory in bytes (g,m,k,b) or percentages %                                 
    %(used_pct)       % used memory                                                                   
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: type
    :synopsis: The type of memory to check (physical = Physical memory (RAM), committed = total memory (RAM+PAGE)

    | The type of memory to check (physical = Physical memory (RAM), committed = total memory (RAM+PAGE)

:query:`check_os_version`
-------------------------
.. query:: check_os_version
    :synopsis: Check the version of the underlaying OS.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | version > 50 | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | version > 50 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${list} | Top level syntax.
    :option:`ok-syntax` |  | ok syntax.
    :option:`empty-syntax` |  | Empty syntax.
    :option:`detail-syntax` | ${version} (${major}.${minor}.${build}) | Detail level syntax.
    :option:`perf-syntax` | version | Performance alias syntax.



Samples
*******

.. include:: ../../samples/CheckSystem_check_os_version_samples.inc



Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    build          Build version number                                                            
    major          Major version number                                                            
    minor          Minor version number                                                            
    version        The system version                                                              
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    build          Build version number                                                            
    major          Major version number                                                            
    minor          Minor version number                                                            
    version        The system version                                                              
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    build          Build version number                                                            
    major          Major version number                                                            
    minor          Minor version number                                                            
    version        The system version                                                              
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    build          Build version number                                                            
    major          Major version number                                                            
    minor          Minor version number                                                            
    version        The system version                                                              
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





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

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(build)          Build version number                                                            
    %(major)          Major version number                                                            
    %(minor)          Minor version number                                                            
    %(version)        The system version                                                              
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: ok-syntax
    :synopsis: ok syntax.

    | ok syntax.
    | DEPRECATED! This is the syntax for when an ok result is returned.
    | This value will not be used if your syntax contains %(list) or %(count).

.. option:: empty-syntax
    :synopsis: Empty syntax.

    | Empty syntax.
    | DEPRECATED! This is the syntax for when nothing matches the filter.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(build)          Build version number                                                            
    %(major)          Major version number                                                            
    %(minor)          Minor version number                                                            
    %(version)        The system version                                                              
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(build)          Build version number                                                            
    %(major)          Major version number                                                            
    %(minor)          Minor version number                                                            
    %(version)        The system version                                                              
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(build)          Build version number                                                            
    %(major)          Major version number                                                            
    %(minor)          Minor version number                                                            
    %(version)        The system version                                                              
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





:query:`check_pagefile`
-----------------------
.. query:: check_pagefile
    :synopsis: Check the size of the system pagefile(s).

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | used > 60% | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | used > 80% | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${list} | Top level syntax.
    :option:`ok-syntax` |  | ok syntax.
    :option:`empty-syntax` |  | Empty syntax.
    :option:`detail-syntax` | ${name} ${used} (${size}) | Detail level syntax.
    :option:`perf-syntax` | ${name} | Performance alias syntax.



Samples
*******

.. include:: ../../samples/CheckSystem_check_pagefile_samples.inc



Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    free           Free memory in bytes (g,m,k,b) or percentages %                                 
    name           The name of the page file (location)                                            
    size           Total size of pagefile                                                          
    used           Used memory in bytes (g,m,k,b) or percentages %                                 
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    free           Free memory in bytes (g,m,k,b) or percentages %                                 
    name           The name of the page file (location)                                            
    size           Total size of pagefile                                                          
    used           Used memory in bytes (g,m,k,b) or percentages %                                 
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    free           Free memory in bytes (g,m,k,b) or percentages %                                 
    name           The name of the page file (location)                                            
    size           Total size of pagefile                                                          
    used           Used memory in bytes (g,m,k,b) or percentages %                                 
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    free           Free memory in bytes (g,m,k,b) or percentages %                                 
    name           The name of the page file (location)                                            
    size           Total size of pagefile                                                          
    used           Used memory in bytes (g,m,k,b) or percentages %                                 
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





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

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
    %(name)           The name of the page file (location)                                            
    %(size)           Total size of pagefile                                                          
    %(used)           Used memory in bytes (g,m,k,b) or percentages %                                 
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: ok-syntax
    :synopsis: ok syntax.

    | ok syntax.
    | DEPRECATED! This is the syntax for when an ok result is returned.
    | This value will not be used if your syntax contains %(list) or %(count).

.. option:: empty-syntax
    :synopsis: Empty syntax.

    | Empty syntax.
    | DEPRECATED! This is the syntax for when nothing matches the filter.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
    %(name)           The name of the page file (location)                                            
    %(size)           Total size of pagefile                                                          
    %(used)           Used memory in bytes (g,m,k,b) or percentages %                                 
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
    %(name)           The name of the page file (location)                                            
    %(size)           Total size of pagefile                                                          
    %(used)           Used memory in bytes (g,m,k,b) or percentages %                                 
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
    %(name)           The name of the page file (location)                                            
    %(size)           Total size of pagefile                                                          
    %(used)           Used memory in bytes (g,m,k,b) or percentages %                                 
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





:query:`check_pdh`
------------------
.. query:: check_pdh
    :synopsis: Check the value of a performance (PDH) counter.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` |  | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` |  | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${list} | Top level syntax.
    :option:`ok-syntax` |  | ok syntax.
    :option:`empty-syntax` |  | Empty syntax.
    :option:`detail-syntax` | ${alias} = ${value} | Detail level syntax.
    :option:`perf-syntax` | ${alias} | Performance alias syntax.
    :option:`counter` |  | Performance counter to check
    :option:`expand-index` | N/A | Expand indexes in counter strings
    :option:`instances` | N/A | Expand wildcards and fetch all instances
    :option:`reload` | N/A | Reload counters on errors (useful to check counters which are not added at boot)
    :option:`averages` | N/A | Check average values (ie. wait for 1 second to collecting two samples)
    :option:`time` |  | Timeframe to use for named rrd counters
    :option:`flags` |  | Extra flags to configure the counter (nocap100, 1000, noscale)
    :option:`type` | large | Format of value (double, long, large)



Samples
*******

.. include:: ../../samples/CheckSystem_check_pdh_samples.inc



Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    alias          The counter alias                                                               
    counter        The counter name                                                                
    value          The counter value                                                               
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    alias          The counter alias                                                               
    counter        The counter name                                                                
    value          The counter value                                                               
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    alias          The counter alias                                                               
    counter        The counter name                                                                
    value          The counter value                                                               
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    alias          The counter alias                                                               
    counter        The counter name                                                                
    value          The counter value                                                               
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





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

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(alias)          The counter alias                                                               
    %(counter)        The counter name                                                                
    %(value)          The counter value                                                               
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: ok-syntax
    :synopsis: ok syntax.

    | ok syntax.
    | DEPRECATED! This is the syntax for when an ok result is returned.
    | This value will not be used if your syntax contains %(list) or %(count).

.. option:: empty-syntax
    :synopsis: Empty syntax.

    | Empty syntax.
    | DEPRECATED! This is the syntax for when nothing matches the filter.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(alias)          The counter alias                                                               
    %(counter)        The counter name                                                                
    %(value)          The counter value                                                               
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(alias)          The counter alias                                                               
    %(counter)        The counter name                                                                
    %(value)          The counter value                                                               
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(alias)          The counter alias                                                               
    %(counter)        The counter name                                                                
    %(value)          The counter value                                                               
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: counter
    :synopsis: Performance counter to check

    | Performance counter to check

.. option:: expand-index
    :synopsis: Expand indexes in counter strings

    | Expand indexes in counter strings

.. option:: instances
    :synopsis: Expand wildcards and fetch all instances

    | Expand wildcards and fetch all instances

.. option:: reload
    :synopsis: Reload counters on errors (useful to check counters which are not added at boot)

    | Reload counters on errors (useful to check counters which are not added at boot)

.. option:: averages
    :synopsis: Check average values (ie. wait for 1 second to collecting two samples)

    | Check average values (ie. wait for 1 second to collecting two samples)

.. option:: time
    :synopsis: Timeframe to use for named rrd counters

    | Timeframe to use for named rrd counters

.. option:: flags
    :synopsis: Extra flags to configure the counter (nocap100, 1000, noscale)

    | Extra flags to configure the counter (nocap100, 1000, noscale)

.. option:: type
    :synopsis: Format of value (double, long, large)

    | Format of value (double, long, large)

:query:`check_process`
----------------------
.. query:: check_process
    :synopsis: Check state/metrics of one or more of the processes running on the computer.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | state != 'unreadable' | Filter which marks interesting items.
    :option:`warning` | state not in ('started') | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | state = 'stopped' or count = 0 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${problem_list} | Top level syntax.
    :option:`ok-syntax` | %(status): all processes are ok. | ok syntax.
    :option:`empty-syntax` | %(status): No processes found | Empty syntax.
    :option:`detail-syntax` | ${exe}=${state} | Detail level syntax.
    :option:`perf-syntax` | ${exe} | Performance alias syntax.
    :option:`process` |  | The service to check, set this to * to check all services
    :option:`scan-info` |  | If all process metrics should be fetched (otherwise only status is fetched)
    :option:`scan-16bit` |  | If 16bit processes should be included
    :option:`delta` |  | Calculate delta over one elapsed second.
    :option:`scan-unreadable` |  | If unreadable processes should be included (will not have information)



Samples
*******

.. include:: ../../samples/CheckSystem_check_process_samples.inc



Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    command_line      Command line of process (not always available)                                  
    creation          Creation time                                                                   
    error             Any error messages associated with fetching info                                
    exe               The name of the executable                                                      
    filename          Name of process (with path)                                                     
    gdi_handles       Number of handles                                                               
    handles           Number of handles                                                               
    hung              Process is hung                                                                 
    kernel            Kernel time in seconds                                                          
    legacy_state      Get process status (for legacy use via check_nt only)                           
    page_fault        Page fault count                                                                
    pagefile          Peak page file use in bytes                                                     
    peak_pagefile     Page file usage in bytes                                                        
    peak_virtual      Peak virtual size in bytes                                                      
    peak_working_set  Peak working set in bytes                                                       
    pid               Process id                                                                      
    started           Process is started                                                              
    state             The current state (started, stopped hung)                                       
    stopped           Process is stopped                                                              
    time              User-kernel time in seconds                                                     
    user              User time in seconds                                                            
    user_handles      Number of handles                                                               
    virtual           Virtual size in bytes                                                           
    working_set       Working set in bytes                                                            
    count             Number of items matching the filter                                             
    total              Total number of items                                                          
    ok_count           Number of items matched the ok criteria                                        
    warn_count         Number of items matched the warning criteria                                   
    crit_count         Number of items matched the critical criteria                                  
    problem_count      Number of items matched either warning or critical criteria                    
    list               A list of all items which matched the filter                                   
    ok_list            A list of all items which matched the ok criteria                              
    warn_list          A list of all items which matched the warning criteria                         
    crit_list          A list of all items which matched the critical criteria                        
    problem_list       A list of all items which matched either the critical or the warning criteria  
    detail_list        A special list with critical, then warning and fainally ok                     
    status             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    command_line      Command line of process (not always available)                                  
    creation          Creation time                                                                   
    error             Any error messages associated with fetching info                                
    exe               The name of the executable                                                      
    filename          Name of process (with path)                                                     
    gdi_handles       Number of handles                                                               
    handles           Number of handles                                                               
    hung              Process is hung                                                                 
    kernel            Kernel time in seconds                                                          
    legacy_state      Get process status (for legacy use via check_nt only)                           
    page_fault        Page fault count                                                                
    pagefile          Peak page file use in bytes                                                     
    peak_pagefile     Page file usage in bytes                                                        
    peak_virtual      Peak virtual size in bytes                                                      
    peak_working_set  Peak working set in bytes                                                       
    pid               Process id                                                                      
    started           Process is started                                                              
    state             The current state (started, stopped hung)                                       
    stopped           Process is stopped                                                              
    time              User-kernel time in seconds                                                     
    user              User time in seconds                                                            
    user_handles      Number of handles                                                               
    virtual           Virtual size in bytes                                                           
    working_set       Working set in bytes                                                            
    count             Number of items matching the filter                                             
    total              Total number of items                                                          
    ok_count           Number of items matched the ok criteria                                        
    warn_count         Number of items matched the warning criteria                                   
    crit_count         Number of items matched the critical criteria                                  
    problem_count      Number of items matched either warning or critical criteria                    
    list               A list of all items which matched the filter                                   
    ok_list            A list of all items which matched the ok criteria                              
    warn_list          A list of all items which matched the warning criteria                         
    crit_list          A list of all items which matched the critical criteria                        
    problem_list       A list of all items which matched either the critical or the warning criteria  
    detail_list        A special list with critical, then warning and fainally ok                     
    status             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    command_line      Command line of process (not always available)                                  
    creation          Creation time                                                                   
    error             Any error messages associated with fetching info                                
    exe               The name of the executable                                                      
    filename          Name of process (with path)                                                     
    gdi_handles       Number of handles                                                               
    handles           Number of handles                                                               
    hung              Process is hung                                                                 
    kernel            Kernel time in seconds                                                          
    legacy_state      Get process status (for legacy use via check_nt only)                           
    page_fault        Page fault count                                                                
    pagefile          Peak page file use in bytes                                                     
    peak_pagefile     Page file usage in bytes                                                        
    peak_virtual      Peak virtual size in bytes                                                      
    peak_working_set  Peak working set in bytes                                                       
    pid               Process id                                                                      
    started           Process is started                                                              
    state             The current state (started, stopped hung)                                       
    stopped           Process is stopped                                                              
    time              User-kernel time in seconds                                                     
    user              User time in seconds                                                            
    user_handles      Number of handles                                                               
    virtual           Virtual size in bytes                                                           
    working_set       Working set in bytes                                                            
    count             Number of items matching the filter                                             
    total              Total number of items                                                          
    ok_count           Number of items matched the ok criteria                                        
    warn_count         Number of items matched the warning criteria                                   
    crit_count         Number of items matched the critical criteria                                  
    problem_count      Number of items matched either warning or critical criteria                    
    list               A list of all items which matched the filter                                   
    ok_list            A list of all items which matched the ok criteria                              
    warn_list          A list of all items which matched the warning criteria                         
    crit_list          A list of all items which matched the critical criteria                        
    problem_list       A list of all items which matched either the critical or the warning criteria  
    detail_list        A special list with critical, then warning and fainally ok                     
    status             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    command_line      Command line of process (not always available)                                  
    creation          Creation time                                                                   
    error             Any error messages associated with fetching info                                
    exe               The name of the executable                                                      
    filename          Name of process (with path)                                                     
    gdi_handles       Number of handles                                                               
    handles           Number of handles                                                               
    hung              Process is hung                                                                 
    kernel            Kernel time in seconds                                                          
    legacy_state      Get process status (for legacy use via check_nt only)                           
    page_fault        Page fault count                                                                
    pagefile          Peak page file use in bytes                                                     
    peak_pagefile     Page file usage in bytes                                                        
    peak_virtual      Peak virtual size in bytes                                                      
    peak_working_set  Peak working set in bytes                                                       
    pid               Process id                                                                      
    started           Process is started                                                              
    state             The current state (started, stopped hung)                                       
    stopped           Process is stopped                                                              
    time              User-kernel time in seconds                                                     
    user              User time in seconds                                                            
    user_handles      Number of handles                                                               
    virtual           Virtual size in bytes                                                           
    working_set       Working set in bytes                                                            
    count             Number of items matching the filter                                             
    total              Total number of items                                                          
    ok_count           Number of items matched the ok criteria                                        
    warn_count         Number of items matched the warning criteria                                   
    crit_count         Number of items matched the critical criteria                                  
    problem_count      Number of items matched either warning or critical criteria                    
    list               A list of all items which matched the filter                                   
    ok_list            A list of all items which matched the ok criteria                              
    warn_list          A list of all items which matched the warning criteria                         
    crit_list          A list of all items which matched the critical criteria                        
    problem_list       A list of all items which matched either the critical or the warning criteria  
    detail_list        A special list with critical, then warning and fainally ok                     
    status             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





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

    ==================== =============================================================================== 
    Key                  Value                                                                           
    -------------------- ------------------------------------------------------------------------------- 
    %(command_line)      Command line of process (not always available)                                  
    %(creation)          Creation time                                                                   
    %(error)             Any error messages associated with fetching info                                
    %(exe)               The name of the executable                                                      
    %(filename)          Name of process (with path)                                                     
    %(gdi_handles)       Number of handles                                                               
    %(handles)           Number of handles                                                               
    %(hung)              Process is hung                                                                 
    %(kernel)            Kernel time in seconds                                                          
    %(legacy_state)      Get process status (for legacy use via check_nt only)                           
    %(page_fault)        Page fault count                                                                
    %(pagefile)          Peak page file use in bytes                                                     
    %(peak_pagefile)     Page file usage in bytes                                                        
    %(peak_virtual)      Peak virtual size in bytes                                                      
    %(peak_working_set)  Peak working set in bytes                                                       
    %(pid)               Process id                                                                      
    %(started)           Process is started                                                              
    %(state)             The current state (started, stopped hung)                                       
    %(stopped)           Process is stopped                                                              
    %(time)              User-kernel time in seconds                                                     
    %(user)              User time in seconds                                                            
    %(user_handles)      Number of handles                                                               
    %(virtual)           Virtual size in bytes                                                           
    %(working_set)       Working set in bytes                                                            
    ${count}             Number of items matching the filter                                             
    ${total}              Total number of items                                                          
    ${ok_count}           Number of items matched the ok criteria                                        
    ${warn_count}         Number of items matched the warning criteria                                   
    ${crit_count}         Number of items matched the critical criteria                                  
    ${problem_count}      Number of items matched either warning or critical criteria                    
    ${list}               A list of all items which matched the filter                                   
    ${ok_list}            A list of all items which matched the ok criteria                              
    ${warn_list}          A list of all items which matched the warning criteria                         
    ${crit_list}          A list of all items which matched the critical criteria                        
    ${problem_list}       A list of all items which matched either the critical or the warning criteria  
    ${detail_list}        A special list with critical, then warning and fainally ok                     
    ${status}             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ==================== ===============================================================================





.. option:: ok-syntax
    :synopsis: ok syntax.

    | ok syntax.
    | DEPRECATED! This is the syntax for when an ok result is returned.
    | This value will not be used if your syntax contains %(list) or %(count).

.. option:: empty-syntax
    :synopsis: Empty syntax.

    | Empty syntax.
    | DEPRECATED! This is the syntax for when nothing matches the filter.
    | Possible values are:

    ==================== =============================================================================== 
    Key                  Value                                                                           
    -------------------- ------------------------------------------------------------------------------- 
    %(command_line)      Command line of process (not always available)                                  
    %(creation)          Creation time                                                                   
    %(error)             Any error messages associated with fetching info                                
    %(exe)               The name of the executable                                                      
    %(filename)          Name of process (with path)                                                     
    %(gdi_handles)       Number of handles                                                               
    %(handles)           Number of handles                                                               
    %(hung)              Process is hung                                                                 
    %(kernel)            Kernel time in seconds                                                          
    %(legacy_state)      Get process status (for legacy use via check_nt only)                           
    %(page_fault)        Page fault count                                                                
    %(pagefile)          Peak page file use in bytes                                                     
    %(peak_pagefile)     Page file usage in bytes                                                        
    %(peak_virtual)      Peak virtual size in bytes                                                      
    %(peak_working_set)  Peak working set in bytes                                                       
    %(pid)               Process id                                                                      
    %(started)           Process is started                                                              
    %(state)             The current state (started, stopped hung)                                       
    %(stopped)           Process is stopped                                                              
    %(time)              User-kernel time in seconds                                                     
    %(user)              User time in seconds                                                            
    %(user_handles)      Number of handles                                                               
    %(virtual)           Virtual size in bytes                                                           
    %(working_set)       Working set in bytes                                                            
    ${count}             Number of items matching the filter                                             
    ${total}              Total number of items                                                          
    ${ok_count}           Number of items matched the ok criteria                                        
    ${warn_count}         Number of items matched the warning criteria                                   
    ${crit_count}         Number of items matched the critical criteria                                  
    ${problem_count}      Number of items matched either warning or critical criteria                    
    ${list}               A list of all items which matched the filter                                   
    ${ok_list}            A list of all items which matched the ok criteria                              
    ${warn_list}          A list of all items which matched the warning criteria                         
    ${crit_list}          A list of all items which matched the critical criteria                        
    ${problem_list}       A list of all items which matched either the critical or the warning criteria  
    ${detail_list}        A special list with critical, then warning and fainally ok                     
    ${status}             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ==================== ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ==================== =============================================================================== 
    Key                  Value                                                                           
    -------------------- ------------------------------------------------------------------------------- 
    %(command_line)      Command line of process (not always available)                                  
    %(creation)          Creation time                                                                   
    %(error)             Any error messages associated with fetching info                                
    %(exe)               The name of the executable                                                      
    %(filename)          Name of process (with path)                                                     
    %(gdi_handles)       Number of handles                                                               
    %(handles)           Number of handles                                                               
    %(hung)              Process is hung                                                                 
    %(kernel)            Kernel time in seconds                                                          
    %(legacy_state)      Get process status (for legacy use via check_nt only)                           
    %(page_fault)        Page fault count                                                                
    %(pagefile)          Peak page file use in bytes                                                     
    %(peak_pagefile)     Page file usage in bytes                                                        
    %(peak_virtual)      Peak virtual size in bytes                                                      
    %(peak_working_set)  Peak working set in bytes                                                       
    %(pid)               Process id                                                                      
    %(started)           Process is started                                                              
    %(state)             The current state (started, stopped hung)                                       
    %(stopped)           Process is stopped                                                              
    %(time)              User-kernel time in seconds                                                     
    %(user)              User time in seconds                                                            
    %(user_handles)      Number of handles                                                               
    %(virtual)           Virtual size in bytes                                                           
    %(working_set)       Working set in bytes                                                            
    ${count}             Number of items matching the filter                                             
    ${total}              Total number of items                                                          
    ${ok_count}           Number of items matched the ok criteria                                        
    ${warn_count}         Number of items matched the warning criteria                                   
    ${crit_count}         Number of items matched the critical criteria                                  
    ${problem_count}      Number of items matched either warning or critical criteria                    
    ${list}               A list of all items which matched the filter                                   
    ${ok_list}            A list of all items which matched the ok criteria                              
    ${warn_list}          A list of all items which matched the warning criteria                         
    ${crit_list}          A list of all items which matched the critical criteria                        
    ${problem_list}       A list of all items which matched either the critical or the warning criteria  
    ${detail_list}        A special list with critical, then warning and fainally ok                     
    ${status}             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ==================== ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ==================== =============================================================================== 
    Key                  Value                                                                           
    -------------------- ------------------------------------------------------------------------------- 
    %(command_line)      Command line of process (not always available)                                  
    %(creation)          Creation time                                                                   
    %(error)             Any error messages associated with fetching info                                
    %(exe)               The name of the executable                                                      
    %(filename)          Name of process (with path)                                                     
    %(gdi_handles)       Number of handles                                                               
    %(handles)           Number of handles                                                               
    %(hung)              Process is hung                                                                 
    %(kernel)            Kernel time in seconds                                                          
    %(legacy_state)      Get process status (for legacy use via check_nt only)                           
    %(page_fault)        Page fault count                                                                
    %(pagefile)          Peak page file use in bytes                                                     
    %(peak_pagefile)     Page file usage in bytes                                                        
    %(peak_virtual)      Peak virtual size in bytes                                                      
    %(peak_working_set)  Peak working set in bytes                                                       
    %(pid)               Process id                                                                      
    %(started)           Process is started                                                              
    %(state)             The current state (started, stopped hung)                                       
    %(stopped)           Process is stopped                                                              
    %(time)              User-kernel time in seconds                                                     
    %(user)              User time in seconds                                                            
    %(user_handles)      Number of handles                                                               
    %(virtual)           Virtual size in bytes                                                           
    %(working_set)       Working set in bytes                                                            
    ${count}             Number of items matching the filter                                             
    ${total}              Total number of items                                                          
    ${ok_count}           Number of items matched the ok criteria                                        
    ${warn_count}         Number of items matched the warning criteria                                   
    ${crit_count}         Number of items matched the critical criteria                                  
    ${problem_count}      Number of items matched either warning or critical criteria                    
    ${list}               A list of all items which matched the filter                                   
    ${ok_list}            A list of all items which matched the ok criteria                              
    ${warn_list}          A list of all items which matched the warning criteria                         
    ${crit_list}          A list of all items which matched the critical criteria                        
    ${problem_list}       A list of all items which matched either the critical or the warning criteria  
    ${detail_list}        A special list with critical, then warning and fainally ok                     
    ${status}             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ==================== ===============================================================================





.. option:: process
    :synopsis: The service to check, set this to * to check all services

    | The service to check, set this to * to check all services

.. option:: scan-info
    :synopsis: If all process metrics should be fetched (otherwise only status is fetched)

    | If all process metrics should be fetched (otherwise only status is fetched)

.. option:: scan-16bit
    :synopsis: If 16bit processes should be included

    | If 16bit processes should be included

.. option:: delta
    :synopsis: Calculate delta over one elapsed second.

    | Calculate delta over one elapsed second.
    | This call will measure values and then sleep for 2 second and then measure again calculating deltas.

.. option:: scan-unreadable
    :synopsis: If unreadable processes should be included (will not have information)

    | If unreadable processes should be included (will not have information)

:query:`check_service`
----------------------
.. query:: check_service
    :synopsis: Check the state of one or more of the computer services.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | not state_is_perfect() | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | not state_is_ok() | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${crit_list}, delayed (${warn_list}) | Top level syntax.
    :option:`ok-syntax` | %(status): All %(count) service(s) are ok. | ok syntax.
    :option:`empty-syntax` | %(status): No services found | Empty syntax.
    :option:`detail-syntax` | ${name}=${state} (${start_type}) | Detail level syntax.
    :option:`perf-syntax` | ${name} | Performance alias syntax.
    :option:`computer` |  | THe name of the remote computer to check
    :option:`service` |  | The service to check, set this to * to check all services
    :option:`exclude` |  | A list of services to ignore (mainly usefull in combination with service=*)
    :option:`type` | service | The types of services to enumerate available types are driver, file-system-driver, kernel-driver, service, service-own-process, service-share-process
    :option:`state` | all | The types of services to enumerate available states are active, inactive or all



Samples
*******

.. include:: ../../samples/CheckSystem_check_service_samples.inc



Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

    =================== ========================================================================================================== 
    Key                 Value                                                                                                      
    ------------------- ---------------------------------------------------------------------------------------------------------- 
    delayed             If the service is delayed                                                                                  
    desc                Service description                                                                                        
    is_trigger          If the service is has associated triggers                                                                  
    legacy_state        Get legacy state (deprecated and only used by check_nt)                                                    
    name                Service name                                                                                               
    pid                 Process id                                                                                                 
    start_type          The configured start type ()                                                                               
    state               The current state ()                                                                                       
    triggers            The number of associated triggers for this service                                                         
    state_is_ok()       Check if the state is ok, i.e. all running services are runningelayed services are allowed to be stopped)  
    state_is_perfect()  Check if the state is ok, i.e. all running services are running                                            
    count               Number of items matching the filter                                                                        
    total                Total number of items                                                                                     
    ok_count             Number of items matched the ok criteria                                                                   
    warn_count           Number of items matched the warning criteria                                                              
    crit_count           Number of items matched the critical criteria                                                             
    problem_count        Number of items matched either warning or critical criteria                                               
    list                 A list of all items which matched the filter                                                              
    ok_list              A list of all items which matched the ok criteria                                                         
    warn_list            A list of all items which matched the warning criteria                                                    
    crit_list            A list of all items which matched the critical criteria                                                   
    problem_list         A list of all items which matched either the critical or the warning criteria                             
    detail_list          A special list with critical, then warning and fainally ok                                                
    status               The returned status (OK/WARN/CRIT/UNKNOWN)                                                                
    =================== ==========================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    =================== ========================================================================================================== 
    Key                 Value                                                                                                      
    ------------------- ---------------------------------------------------------------------------------------------------------- 
    delayed             If the service is delayed                                                                                  
    desc                Service description                                                                                        
    is_trigger          If the service is has associated triggers                                                                  
    legacy_state        Get legacy state (deprecated and only used by check_nt)                                                    
    name                Service name                                                                                               
    pid                 Process id                                                                                                 
    start_type          The configured start type ()                                                                               
    state               The current state ()                                                                                       
    triggers            The number of associated triggers for this service                                                         
    state_is_ok()       Check if the state is ok, i.e. all running services are runningelayed services are allowed to be stopped)  
    state_is_perfect()  Check if the state is ok, i.e. all running services are running                                            
    count               Number of items matching the filter                                                                        
    total                Total number of items                                                                                     
    ok_count             Number of items matched the ok criteria                                                                   
    warn_count           Number of items matched the warning criteria                                                              
    crit_count           Number of items matched the critical criteria                                                             
    problem_count        Number of items matched either warning or critical criteria                                               
    list                 A list of all items which matched the filter                                                              
    ok_list              A list of all items which matched the ok criteria                                                         
    warn_list            A list of all items which matched the warning criteria                                                    
    crit_list            A list of all items which matched the critical criteria                                                   
    problem_list         A list of all items which matched either the critical or the warning criteria                             
    detail_list          A special list with critical, then warning and fainally ok                                                
    status               The returned status (OK/WARN/CRIT/UNKNOWN)                                                                
    =================== ==========================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    =================== ========================================================================================================== 
    Key                 Value                                                                                                      
    ------------------- ---------------------------------------------------------------------------------------------------------- 
    delayed             If the service is delayed                                                                                  
    desc                Service description                                                                                        
    is_trigger          If the service is has associated triggers                                                                  
    legacy_state        Get legacy state (deprecated and only used by check_nt)                                                    
    name                Service name                                                                                               
    pid                 Process id                                                                                                 
    start_type          The configured start type ()                                                                               
    state               The current state ()                                                                                       
    triggers            The number of associated triggers for this service                                                         
    state_is_ok()       Check if the state is ok, i.e. all running services are runningelayed services are allowed to be stopped)  
    state_is_perfect()  Check if the state is ok, i.e. all running services are running                                            
    count               Number of items matching the filter                                                                        
    total                Total number of items                                                                                     
    ok_count             Number of items matched the ok criteria                                                                   
    warn_count           Number of items matched the warning criteria                                                              
    crit_count           Number of items matched the critical criteria                                                             
    problem_count        Number of items matched either warning or critical criteria                                               
    list                 A list of all items which matched the filter                                                              
    ok_list              A list of all items which matched the ok criteria                                                         
    warn_list            A list of all items which matched the warning criteria                                                    
    crit_list            A list of all items which matched the critical criteria                                                   
    problem_list         A list of all items which matched either the critical or the warning criteria                             
    detail_list          A special list with critical, then warning and fainally ok                                                
    status               The returned status (OK/WARN/CRIT/UNKNOWN)                                                                
    =================== ==========================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    =================== ========================================================================================================== 
    Key                 Value                                                                                                      
    ------------------- ---------------------------------------------------------------------------------------------------------- 
    delayed             If the service is delayed                                                                                  
    desc                Service description                                                                                        
    is_trigger          If the service is has associated triggers                                                                  
    legacy_state        Get legacy state (deprecated and only used by check_nt)                                                    
    name                Service name                                                                                               
    pid                 Process id                                                                                                 
    start_type          The configured start type ()                                                                               
    state               The current state ()                                                                                       
    triggers            The number of associated triggers for this service                                                         
    state_is_ok()       Check if the state is ok, i.e. all running services are runningelayed services are allowed to be stopped)  
    state_is_perfect()  Check if the state is ok, i.e. all running services are running                                            
    count               Number of items matching the filter                                                                        
    total                Total number of items                                                                                     
    ok_count             Number of items matched the ok criteria                                                                   
    warn_count           Number of items matched the warning criteria                                                              
    crit_count           Number of items matched the critical criteria                                                             
    problem_count        Number of items matched either warning or critical criteria                                               
    list                 A list of all items which matched the filter                                                              
    ok_list              A list of all items which matched the ok criteria                                                         
    warn_list            A list of all items which matched the warning criteria                                                    
    crit_list            A list of all items which matched the critical criteria                                                   
    problem_list         A list of all items which matched either the critical or the warning criteria                             
    detail_list          A special list with critical, then warning and fainally ok                                                
    status               The returned status (OK/WARN/CRIT/UNKNOWN)                                                                
    =================== ==========================================================================================================





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

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(delayed)        If the service is delayed                                                       
    %(desc)           Service description                                                             
    %(is_trigger)     If the service is has associated triggers                                       
    %(legacy_state)   Get legacy state (deprecated and only used by check_nt)                         
    %(name)           Service name                                                                    
    %(pid)            Process id                                                                      
    %(start_type)     The configured start type ()                                                    
    %(state)          The current state ()                                                            
    %(triggers)       The number of associated triggers for this service                              
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: ok-syntax
    :synopsis: ok syntax.

    | ok syntax.
    | DEPRECATED! This is the syntax for when an ok result is returned.
    | This value will not be used if your syntax contains %(list) or %(count).

.. option:: empty-syntax
    :synopsis: Empty syntax.

    | Empty syntax.
    | DEPRECATED! This is the syntax for when nothing matches the filter.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(delayed)        If the service is delayed                                                       
    %(desc)           Service description                                                             
    %(is_trigger)     If the service is has associated triggers                                       
    %(legacy_state)   Get legacy state (deprecated and only used by check_nt)                         
    %(name)           Service name                                                                    
    %(pid)            Process id                                                                      
    %(start_type)     The configured start type ()                                                    
    %(state)          The current state ()                                                            
    %(triggers)       The number of associated triggers for this service                              
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(delayed)        If the service is delayed                                                       
    %(desc)           Service description                                                             
    %(is_trigger)     If the service is has associated triggers                                       
    %(legacy_state)   Get legacy state (deprecated and only used by check_nt)                         
    %(name)           Service name                                                                    
    %(pid)            Process id                                                                      
    %(start_type)     The configured start type ()                                                    
    %(state)          The current state ()                                                            
    %(triggers)       The number of associated triggers for this service                              
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(delayed)        If the service is delayed                                                       
    %(desc)           Service description                                                             
    %(is_trigger)     If the service is has associated triggers                                       
    %(legacy_state)   Get legacy state (deprecated and only used by check_nt)                         
    %(name)           Service name                                                                    
    %(pid)            Process id                                                                      
    %(start_type)     The configured start type ()                                                    
    %(state)          The current state ()                                                            
    %(triggers)       The number of associated triggers for this service                              
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: computer
    :synopsis: THe name of the remote computer to check

    | THe name of the remote computer to check

.. option:: service
    :synopsis: The service to check, set this to * to check all services

    | The service to check, set this to * to check all services

.. option:: exclude
    :synopsis: A list of services to ignore (mainly usefull in combination with service=*)

    | A list of services to ignore (mainly usefull in combination with service=*)

.. option:: type
    :synopsis: The types of services to enumerate available types are driver, file-system-driver, kernel-driver, service, service-own-process, service-share-process

    | The types of services to enumerate available types are driver, file-system-driver, kernel-driver, service, service-own-process, service-share-process

.. option:: state
    :synopsis: The types of services to enumerate available states are active, inactive or all

    | The types of services to enumerate available states are active, inactive or all

:query:`check_uptime`
---------------------
.. query:: check_uptime
    :synopsis: Check time since last server re-boot.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | uptime < 2d | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | uptime < 1d | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${list} | Top level syntax.
    :option:`ok-syntax` |  | ok syntax.
    :option:`empty-syntax` |  | Empty syntax.
    :option:`detail-syntax` | uptime: ${uptime}h, boot: ${boot} (UTC) | Detail level syntax.
    :option:`perf-syntax` | uptime | Performance alias syntax.



Samples
*******

.. include:: ../../samples/CheckSystem_check_uptime_samples.inc



Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

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

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    boot           System boot time                                                                
    uptime         Time since last boot                                                            
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    boot           System boot time                                                                
    uptime         Time since last boot                                                            
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    boot           System boot time                                                                
    uptime         Time since last boot                                                            
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    ============== =============================================================================== 
    Key            Value                                                                           
    -------------- ------------------------------------------------------------------------------- 
    boot           System boot time                                                                
    uptime         Time since last boot                                                            
    count          Number of items matching the filter                                             
    total           Total number of items                                                          
    ok_count        Number of items matched the ok criteria                                        
    warn_count      Number of items matched the warning criteria                                   
    crit_count      Number of items matched the critical criteria                                  
    problem_count   Number of items matched either warning or critical criteria                    
    list            A list of all items which matched the filter                                   
    ok_list         A list of all items which matched the ok criteria                              
    warn_list       A list of all items which matched the warning criteria                         
    crit_list       A list of all items which matched the critical criteria                        
    problem_list    A list of all items which matched either the critical or the warning criteria  
    detail_list     A special list with critical, then warning and fainally ok                     
    status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ============== ===============================================================================





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

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(boot)           System boot time                                                                
    %(uptime)         Time since last boot                                                            
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: ok-syntax
    :synopsis: ok syntax.

    | ok syntax.
    | DEPRECATED! This is the syntax for when an ok result is returned.
    | This value will not be used if your syntax contains %(list) or %(count).

.. option:: empty-syntax
    :synopsis: Empty syntax.

    | Empty syntax.
    | DEPRECATED! This is the syntax for when nothing matches the filter.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(boot)           System boot time                                                                
    %(uptime)         Time since last boot                                                            
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(boot)           System boot time                                                                
    %(uptime)         Time since last boot                                                            
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(boot)           System boot time                                                                
    %(uptime)         Time since last boot                                                            
    ${count}          Number of items matching the filter                                             
    ${total}           Total number of items                                                          
    ${ok_count}        Number of items matched the ok criteria                                        
    ${warn_count}      Number of items matched the warning criteria                                   
    ${crit_count}      Number of items matched the critical criteria                                  
    ${problem_count}   Number of items matched either warning or critical criteria                    
    ${list}            A list of all items which matched the filter                                   
    ${ok_list}         A list of all items which matched the ok criteria                              
    ${warn_list}       A list of all items which matched the warning criteria                         
    ${crit_list}       A list of all items which matched the critical criteria                        
    ${problem_list}    A list of all items which matched either the critical or the warning criteria  
    ${detail_list}     A special list with critical, then warning and fainally ok                     
    ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================= ===============================================================================





:query:`checkcounter`
---------------------
.. query:: checkcounter
    :synopsis: Legacy version of check_pdh

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`Counter` |  | The time to check
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` |  | Maximum value before a warning is returned.
    :option:`MaxCrit` |  | Maximum value before a critical is returned.
    :option:`MinWarn` |  | Minimum value before a warning is returned.
    :option:`MinCrit` |  | Minimum value before a critical is returned.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: Counter
    :synopsis: The time to check

    | The time to check

.. option:: ShowAll
    :synopsis: Configures display format (if set shows all items not only failures, if set to long shows all cores).

    | Configures display format (if set shows all items not only failures, if set to long shows all cores).

.. option:: MaxWarn
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: MaxCrit
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

.. option:: MinWarn
    :synopsis: Minimum value before a warning is returned.

    | Minimum value before a warning is returned.

.. option:: MinCrit
    :synopsis: Minimum value before a critical is returned.

    | Minimum value before a critical is returned.

:query:`checkcpu`
-----------------
.. query:: checkcpu
    :synopsis: Legacy version of check_cpu

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`time` |  | The time to check
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` |  | Maximum value before a warning is returned.
    :option:`MaxCrit` |  | Maximum value before a critical is returned.
    :option:`MinWarn` |  | Minimum value before a warning is returned.
    :option:`MinCrit` |  | Minimum value before a critical is returned.
    :option:`warn` |  | Maximum value before a warning is returned.
    :option:`crit` |  | Maximum value before a critical is returned.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: time
    :synopsis: The time to check

    | The time to check

.. option:: ShowAll
    :synopsis: Configures display format (if set shows all items not only failures, if set to long shows all cores).

    | Configures display format (if set shows all items not only failures, if set to long shows all cores).

.. option:: MaxWarn
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: MaxCrit
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

.. option:: MinWarn
    :synopsis: Minimum value before a warning is returned.

    | Minimum value before a warning is returned.

.. option:: MinCrit
    :synopsis: Minimum value before a critical is returned.

    | Minimum value before a critical is returned.

.. option:: warn
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: crit
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

:query:`checkmem`
-----------------
.. query:: checkmem
    :synopsis: Legacy version of check_mem

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`type` |  | The types to check
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` |  | Maximum value before a warning is returned.
    :option:`MaxCrit` |  | Maximum value before a critical is returned.
    :option:`MinWarn` |  | Minimum value before a warning is returned.
    :option:`MinCrit` |  | Minimum value before a critical is returned.
    :option:`warn` |  | Maximum value before a warning is returned.
    :option:`crit` |  | Maximum value before a critical is returned.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: type
    :synopsis: The types to check

    | The types to check

.. option:: ShowAll
    :synopsis: Configures display format (if set shows all items not only failures, if set to long shows all cores).

    | Configures display format (if set shows all items not only failures, if set to long shows all cores).

.. option:: MaxWarn
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: MaxCrit
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

.. option:: MinWarn
    :synopsis: Minimum value before a warning is returned.

    | Minimum value before a warning is returned.

.. option:: MinCrit
    :synopsis: Minimum value before a critical is returned.

    | Minimum value before a critical is returned.

.. option:: warn
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: crit
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

:query:`checkprocstate`
-----------------------
.. query:: checkprocstate
    :synopsis: Legacy version of check_process

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarnCount` |  | Maximum value before a warning is returned.
    :option:`MaxCritCount` |  | Maximum value before a critical is returned.
    :option:`MinWarnCount` |  | Minimum value before a warning is returned.
    :option:`MinCritCount` |  | Minimum value before a critical is returned.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: ShowAll
    :synopsis: Configures display format (if set shows all items not only failures, if set to long shows all cores).

    | Configures display format (if set shows all items not only failures, if set to long shows all cores).

.. option:: MaxWarnCount
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: MaxCritCount
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

.. option:: MinWarnCount
    :synopsis: Minimum value before a warning is returned.

    | Minimum value before a warning is returned.

.. option:: MinCritCount
    :synopsis: Minimum value before a critical is returned.

    | Minimum value before a critical is returned.

:query:`checkservicestate`
--------------------------
.. query:: checkservicestate
    :synopsis: Legacy version of check_service

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`CheckAll` | true | Check all services.
    :option:`exclude` |  | Exclude services
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: CheckAll
    :synopsis: Check all services.

    | Check all services.

.. option:: exclude
    :synopsis: Exclude services

    | Exclude services

.. option:: ShowAll
    :synopsis: Configures display format (if set shows all items not only failures, if set to long shows all cores).

    | Configures display format (if set shows all items not only failures, if set to long shows all cores).

:query:`checkuptime`
--------------------
.. query:: checkuptime
    :synopsis: Legacy version of check_uptime

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` |  | Maximum value before a warning is returned.
    :option:`MaxCrit` |  | Maximum value before a critical is returned.
    :option:`MinWarn` |  | Minimum value before a warning is returned.
    :option:`MinCrit` |  | Minimum value before a critical is returned.
    :option:`warn` |  | Maximum value before a warning is returned.
    :option:`crit` |  | Maximum value before a critical is returned.




Arguments
*********
.. option:: help
    :synopsis: Show help screen (this screen)

    | Show help screen (this screen)

.. option:: help-pb
    :synopsis: Show help screen as a protocol buffer payload

    | Show help screen as a protocol buffer payload

.. option:: show-default
    :synopsis: Show default values for a given command

    | Show default values for a given command

.. option:: help-short
    :synopsis: Show help screen (short format).

    | Show help screen (short format).

.. option:: ShowAll
    :synopsis: Configures display format (if set shows all items not only failures, if set to long shows all cores).

    | Configures display format (if set shows all items not only failures, if set to long shows all cores).

.. option:: MaxWarn
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: MaxCrit
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

.. option:: MinWarn
    :synopsis: Minimum value before a warning is returned.

    | Minimum value before a warning is returned.

.. option:: MinCrit
    :synopsis: Minimum value before a critical is returned.

    | Minimum value before a critical is returned.

.. option:: warn
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: crit
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.





/ settings/ system/ windows
---------------------------

.. confpath:: /settings/system/windows
    :synopsis: WINDOWS CHECK SYSTEM

**WINDOWS CHECK SYSTEM**

    | Section for system checks and system settings


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`default buffer length` | 1h | DEFAULT LENGTH
        :confkey:`subsystem` | default | PDH SUBSYSTEM

    **Sample**::

        # WINDOWS CHECK SYSTEM
        # Section for system checks and system settings
        [/settings/system/windows]
        default buffer length=1h
        subsystem=default


    .. confkey:: default buffer length
        :synopsis: DEFAULT LENGTH

        **DEFAULT LENGTH**

        | Used to define the default interval for range buffer checks (ie. CPU).

        **Path**: /settings/system/windows

        **Key**: default buffer length

        **Default value**: 1h

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows]
            # DEFAULT LENGTH
            default buffer length=1h


    .. confkey:: subsystem
        :synopsis: PDH SUBSYSTEM

        **PDH SUBSYSTEM**

        | Set which pdh subsystem to use.

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows

        **Key**: subsystem

        **Default value**: default

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows]
            # PDH SUBSYSTEM
            subsystem=default




…  / counters
-------------

.. confpath:: /settings/system/windows/counters
    :synopsis: COUNTERS

**COUNTERS**

    | Add counters to check




    **Sample**::

        # COUNTERS
        # Add counters to check
        [/settings/system/windows/counters]




…  / real-time
--------------

.. confpath:: /settings/system/windows/real-time
    :synopsis: CONFIGURE REALTIME CHECKING

**CONFIGURE REALTIME CHECKING**

    | A set of options to configure the real time checks




    **Sample**::

        # CONFIGURE REALTIME CHECKING
        # A set of options to configure the real time checks
        [/settings/system/windows/real-time]




…  / real-time / checks
-----------------------

.. confpath:: /settings/system/windows/real-time/checks
    :synopsis: REALTIME FILTERS

**REALTIME FILTERS**

    | A set of filters to use in real-time mode




    **Sample**::

        # REALTIME FILTERS
        # A set of filters to use in real-time mode
        [/settings/system/windows/real-time/checks]




…  / real-time / checks / sample
--------------------------------

.. confpath:: /settings/system/windows/real-time/checks/sample
    :synopsis: REAL TIME FILTER DEFENITION

**REAL TIME FILTER DEFENITION**

    | Definition for real time filter: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias` |  | ALIAS
        :confkey:`check` | cpu | TYPE OF CHECK
        :confkey:`command` |  | COMMAND NAME
        :confkey:`critical` |  | CRITICAL FILTER
        :confkey:`debug` | 0 | DEBUG
        :confkey:`destination` |  | DESTINATION
        :confkey:`detail syntax` |  | SYNTAX
        :confkey:`empty message` | eventlog found no records | EMPTY MESSAGE
        :confkey:`filter` |  | FILTER
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`maximum age` | 5m | MAGIMUM AGE
        :confkey:`ok` |  | OK FILTER
        :confkey:`ok syntax` |  | SYNTAX
        :confkey:`parent` | default | PARENT
        :confkey:`perf config` |  | PERF CONFIG
        :confkey:`severity` |  | SEVERITY
        :confkey:`target` |  | DESTINATION
        :confkey:`time` |  | TIME
        :confkey:`times` |  | FILES
        :confkey:`top syntax` |  | SYNTAX
        :confkey:`warning` |  | WARNING FILTER

    **Sample**::

        # REAL TIME FILTER DEFENITION
        # Definition for real time filter: sample
        [/settings/system/windows/real-time/checks/sample]
        alias=
        check=cpu
        command=
        critical=
        debug=0
        destination=
        detail syntax=
        empty message=eventlog found no records
        filter=
        is template=0
        maximum age=5m
        ok=
        ok syntax=
        parent=default
        perf config=
        severity=
        target=
        time=
        times=
        top syntax=
        warning=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: alias

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # ALIAS
            alias=


    .. confkey:: check
        :synopsis: TYPE OF CHECK

        **TYPE OF CHECK**

        | The type of check cpu or memory

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: check

        **Default value**: cpu

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # TYPE OF CHECK
            check=cpu


    .. confkey:: command
        :synopsis: COMMAND NAME

        **COMMAND NAME**

        | The name of the command (think nagios service name) to report up stream (defaults to alias if not set)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: command

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # COMMAND NAME
            command=


    .. confkey:: critical
        :synopsis: CRITICAL FILTER

        **CRITICAL FILTER**

        | If any rows match this filter severity will escalated to CRITICAL

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: critical

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # CRITICAL FILTER
            critical=


    .. confkey:: debug
        :synopsis: DEBUG

        **DEBUG**

        | Enable this to display debug information for this match filter

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: debug

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # DEBUG
            debug=0


    .. confkey:: destination
        :synopsis: DESTINATION

        **DESTINATION**

        | The destination for intercepted messages

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: destination

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # DESTINATION
            destination=


    .. confkey:: detail syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: detail syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # SYNTAX
            detail syntax=


    .. confkey:: empty message
        :synopsis: EMPTY MESSAGE

        **EMPTY MESSAGE**

        | The message to display if nothing matches the filter (generally considered the ok state).

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: empty message

        **Default value**: eventlog found no records

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # EMPTY MESSAGE
            empty message=eventlog found no records


    .. confkey:: filter
        :synopsis: FILTER

        **FILTER**

        | Scan files for matching rows for each matching rows an OK message will be submitted

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: filter

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # FILTER
            filter=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: is template

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # IS TEMPLATE
            is template=0


    .. confkey:: maximum age
        :synopsis: MAGIMUM AGE

        **MAGIMUM AGE**

        | How long before reporting "ok".
        | If this is set to "false" no periodic ok messages will be reported only errors.

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: maximum age

        **Default value**: 5m

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # MAGIMUM AGE
            maximum age=5m


    .. confkey:: ok
        :synopsis: OK FILTER

        **OK FILTER**

        | If any rows match this filter severity will escalated down to OK

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: ok

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # OK FILTER
            ok=


    .. confkey:: ok syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: ok syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # SYNTAX
            ok syntax=


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: parent

        **Default value**: default

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # PARENT
            parent=default


    .. confkey:: perf config
        :synopsis: PERF CONFIG

        **PERF CONFIG**

        | Performance data configuration

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: perf config

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # PERF CONFIG
            perf config=


    .. confkey:: severity
        :synopsis: SEVERITY

        **SEVERITY**

        | THe severity of this message (OK, WARNING, CRITICAL, UNKNOWN)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: severity

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # SEVERITY
            severity=


    .. confkey:: target
        :synopsis: DESTINATION

        **DESTINATION**

        | Same as destination

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: target

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # DESTINATION
            target=


    .. confkey:: time
        :synopsis: TIME

        **TIME**

        | The time to check

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: time

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # TIME
            time=


    .. confkey:: times
        :synopsis: FILES

        **FILES**

        | A list of times to check (soma separated)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: times

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # FILES
            times=


    .. confkey:: top syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: top syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # SYNTAX
            top syntax=


    .. confkey:: warning
        :synopsis: WARNING FILTER

        **WARNING FILTER**

        | If any rows match this filter severity will escalated to WARNING

        **Path**: /settings/system/windows/real-time/checks/sample

        **Key**: warning

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/real-time/checks/sample]
            # WARNING FILTER
            warning=




…  / service mapping
--------------------

.. confpath:: /settings/system/windows/service mapping
    :synopsis: SERVICE MAPPING SECTION

**SERVICE MAPPING SECTION**

    | Configure which services has to be in which state




    **Sample**::

        # SERVICE MAPPING SECTION
        # Configure which services has to be in which state
        [/settings/system/windows/service mapping]


