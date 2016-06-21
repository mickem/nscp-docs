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
    :query:`check_network` | Check network interface status.
    :query:`check_os_version` | Check the version of the underlaying OS.
    :query:`check_pagefile` | Check the size of the system pagefile(s).
    :query:`check_pdh` | Check the value of a performance (PDH) counter on the local or remote system.
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
    :confpath:`/settings/system/windows/counters` | :confkey:`~/settings/system/windows/counters.disk_queue_length` | disk_queue_length
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.buffer size` | BUFFER SIZE
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.collection strategy` | COLLECTION STRATEGY
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.counter` | COUNTER
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.flags` | FLAGS
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.instances` | Interpret instances
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.type` | COUNTER TYPE

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/system/windows` | :confkey:`~/settings/system/windows.subsystem` | PDH SUBSYSTEM
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.alias` | ALIAS
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.is template` | IS TEMPLATE
    :confpath:`/settings/system/windows/counters/default` | :confkey:`~/settings/system/windows/counters/default.parent` | PARENT
    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.alias` | ALIAS
    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.is template` | IS TEMPLATE
    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.parent` | PARENT

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.buffer size` | BUFFER SIZE
    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.collection strategy` | COLLECTION STRATEGY
    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.counter` | COUNTER
    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.flags` | FLAGS
    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.instances` | Interpret instances
    :confpath:`/settings/system/windows/counters/sample` | :confkey:`~/settings/system/windows/counters/sample.type` | COUNTER TYPE



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

    :option:`filter` | core = 'total' | Filter which marks interesting items.
    :option:`warning` | load > 80 | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | load > 90 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
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
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    core           The core to check (total or core ##)                                                                           
    core_id        The core to check (total or core_##)                                                                           
    idle           The current idle load for a given core                                                                         
    kernel         The current kernel load for a given core                                                                       
    load           The current load for a given core                                                                              
    time           The time frame to check                                                                                        
    ============== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    core           The core to check (total or core ##)                                                                           
    core_id        The core to check (total or core_##)                                                                           
    idle           The current idle load for a given core                                                                         
    kernel         The current kernel load for a given core                                                                       
    load           The current load for a given core                                                                              
    time           The time frame to check                                                                                        
    ============== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    core           The core to check (total or core ##)                                                                           
    core_id        The core to check (total or core_##)                                                                           
    idle           The current idle load for a given core                                                                         
    kernel         The current kernel load for a given core                                                                       
    load           The current load for a given core                                                                              
    time           The time frame to check                                                                                        
    ============== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    core           The core to check (total or core ##)                                                                           
    core_id        The core to check (total or core_##)                                                                           
    idle           The current idle load for a given core                                                                         
    kernel         The current kernel load for a given core                                                                       
    load           The current load for a given core                                                                              
    time           The time frame to check                                                                                        
    ============== ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ======== ========================================= 
    Key      Value                                     
    -------- ----------------------------------------- 
    core     The core to check (total or core ##)      
    core_id  The core to check (total or core_##)      
    idle     The current idle load for a given core    
    kernel   The current kernel load for a given core  
    load     The current load for a given core         
    time     The time frame to check                   
    ======== =========================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ======== ========================================= 
    Key      Value                                     
    -------- ----------------------------------------- 
    core     The core to check (total or core ##)      
    core_id  The core to check (total or core_##)      
    idle     The current idle load for a given core    
    kernel   The current kernel load for a given core  
    load     The current load for a given core         
    time     The time frame to check                   
    ======== =========================================





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

    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | used > 80% | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | used > 90% | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
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
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    free           Free memory in bytes (g,m,k,b) or percentages %                                                                
    free_pct       % free memory                                                                                                  
    size           Total size of memory                                                                                           
    type           The type of memory to check                                                                                    
    used           Used memory in bytes (g,m,k,b) or percentages %                                                                
    used_pct       % used memory                                                                                                  
    ============== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    free           Free memory in bytes (g,m,k,b) or percentages %                                                                
    free_pct       % free memory                                                                                                  
    size           Total size of memory                                                                                           
    type           The type of memory to check                                                                                    
    used           Used memory in bytes (g,m,k,b) or percentages %                                                                
    used_pct       % used memory                                                                                                  
    ============== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    free           Free memory in bytes (g,m,k,b) or percentages %                                                                
    free_pct       % free memory                                                                                                  
    size           Total size of memory                                                                                           
    type           The type of memory to check                                                                                    
    used           Used memory in bytes (g,m,k,b) or percentages %                                                                
    used_pct       % used memory                                                                                                  
    ============== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    free           Free memory in bytes (g,m,k,b) or percentages %                                                                
    free_pct       % free memory                                                                                                  
    size           Total size of memory                                                                                           
    type           The type of memory to check                                                                                    
    used           Used memory in bytes (g,m,k,b) or percentages %                                                                
    used_pct       % used memory                                                                                                  
    ============== ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ========= ================================================ 
    Key       Value                                            
    --------- ------------------------------------------------ 
    free      Free memory in bytes (g,m,k,b) or percentages %  
    free_pct  % free memory                                    
    size      Total size of memory                             
    type      The type of memory to check                      
    used      Used memory in bytes (g,m,k,b) or percentages %  
    used_pct  % used memory                                    
    ========= ================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ========= ================================================ 
    Key       Value                                            
    --------- ------------------------------------------------ 
    free      Free memory in bytes (g,m,k,b) or percentages %  
    free_pct  % free memory                                    
    size      Total size of memory                             
    type      The type of memory to check                      
    used      Used memory in bytes (g,m,k,b) or percentages %  
    used_pct  % used memory                                    
    ========= ================================================





.. option:: type
    :synopsis: The type of memory to check (physical = Physical memory (RAM), committed = total memory (RAM+PAGE)

    | The type of memory to check (physical = Physical memory (RAM), committed = total memory (RAM+PAGE)

:query:`check_network`
----------------------
.. query:: check_network
    :synopsis: Check network interface status.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | total > 10000 | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | total > 100000 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | critical | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`top-syntax` | ${status}: ${list} | Top level syntax.
    :option:`ok-syntax` | %(status): Network interfaces seem ok. | ok syntax.
    :option:`empty-syntax` |  | Empty syntax.
    :option:`detail-syntax` | ${name} >${sent} <${received} bps | Detail level syntax.
    :option:`perf-syntax` | ${name} | Performance alias syntax.




Arguments
*********
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ================== ============================================================================================================== 
    Key                Value                                                                                                          
    ------------------ -------------------------------------------------------------------------------------------------------------- 
    count              Number of items matching the filter. Common option for all checks.                                             
    total               Total number of items. Common option for all checks.                                                          
    ok_count            Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count          Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count          Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count       Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                A list of all items which matched the filter. Common option for all checks.                                   
    ok_list             A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list           A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list           A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list        A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list         A special list with critical, then warning and finally ok. Common option for all checks.                      
    status              The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    MAC                The MAC address                                                                                                
    enabled            True if the network interface is enabled                                                                       
    name               Network interface name                                                                                         
    net_connection_id  Network connection id                                                                                          
    received           Bytes received per second                                                                                      
    sent               Bytes sent per second                                                                                          
    speed              The network interface speed                                                                                    
    status             Network connection status                                                                                      
    total              Bytes total per second                                                                                         
    ================== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ================== ============================================================================================================== 
    Key                Value                                                                                                          
    ------------------ -------------------------------------------------------------------------------------------------------------- 
    count              Number of items matching the filter. Common option for all checks.                                             
    total               Total number of items. Common option for all checks.                                                          
    ok_count            Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count          Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count          Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count       Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                A list of all items which matched the filter. Common option for all checks.                                   
    ok_list             A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list           A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list           A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list        A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list         A special list with critical, then warning and finally ok. Common option for all checks.                      
    status              The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    MAC                The MAC address                                                                                                
    enabled            True if the network interface is enabled                                                                       
    name               Network interface name                                                                                         
    net_connection_id  Network connection id                                                                                          
    received           Bytes received per second                                                                                      
    sent               Bytes sent per second                                                                                          
    speed              The network interface speed                                                                                    
    status             Network connection status                                                                                      
    total              Bytes total per second                                                                                         
    ================== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ================== ============================================================================================================== 
    Key                Value                                                                                                          
    ------------------ -------------------------------------------------------------------------------------------------------------- 
    count              Number of items matching the filter. Common option for all checks.                                             
    total               Total number of items. Common option for all checks.                                                          
    ok_count            Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count          Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count          Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count       Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                A list of all items which matched the filter. Common option for all checks.                                   
    ok_list             A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list           A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list           A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list        A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list         A special list with critical, then warning and finally ok. Common option for all checks.                      
    status              The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    MAC                The MAC address                                                                                                
    enabled            True if the network interface is enabled                                                                       
    name               Network interface name                                                                                         
    net_connection_id  Network connection id                                                                                          
    received           Bytes received per second                                                                                      
    sent               Bytes sent per second                                                                                          
    speed              The network interface speed                                                                                    
    status             Network connection status                                                                                      
    total              Bytes total per second                                                                                         
    ================== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ================== ============================================================================================================== 
    Key                Value                                                                                                          
    ------------------ -------------------------------------------------------------------------------------------------------------- 
    count              Number of items matching the filter. Common option for all checks.                                             
    total               Total number of items. Common option for all checks.                                                          
    ok_count            Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count          Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count          Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count       Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                A list of all items which matched the filter. Common option for all checks.                                   
    ok_list             A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list           A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list           A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list        A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list         A special list with critical, then warning and finally ok. Common option for all checks.                      
    status              The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    MAC                The MAC address                                                                                                
    enabled            True if the network interface is enabled                                                                       
    name               Network interface name                                                                                         
    net_connection_id  Network connection id                                                                                          
    received           Bytes received per second                                                                                      
    sent               Bytes sent per second                                                                                          
    speed              The network interface speed                                                                                    
    status             Network connection status                                                                                      
    total              Bytes total per second                                                                                         
    ================== ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ================== ========================================= 
    Key                Value                                     
    ------------------ ----------------------------------------- 
    MAC                The MAC address                           
    enabled            True if the network interface is enabled  
    name               Network interface name                    
    net_connection_id  Network connection id                     
    received           Bytes received per second                 
    sent               Bytes sent per second                     
    speed              The network interface speed               
    status             Network connection status                 
    total              Bytes total per second                    
    ================== =========================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================== ========================================= 
    Key                Value                                     
    ------------------ ----------------------------------------- 
    MAC                The MAC address                           
    enabled            True if the network interface is enabled  
    name               Network interface name                    
    net_connection_id  Network connection id                     
    received           Bytes received per second                 
    sent               Bytes sent per second                     
    speed              The network interface speed               
    status             Network connection status                 
    total              Bytes total per second                    
    ================== =========================================





:query:`check_os_version`
-------------------------
.. query:: check_os_version
    :synopsis: Check the version of the underlaying OS.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | version <= 50 | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | version <= 50 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
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
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    build          Build version number                                                                                           
    major          Major version number                                                                                           
    minor          Minor version number                                                                                           
    version        The system version                                                                                             
    ============== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    build          Build version number                                                                                           
    major          Major version number                                                                                           
    minor          Minor version number                                                                                           
    version        The system version                                                                                             
    ============== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    build          Build version number                                                                                           
    major          Major version number                                                                                           
    minor          Minor version number                                                                                           
    version        The system version                                                                                             
    ============== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    build          Build version number                                                                                           
    major          Major version number                                                                                           
    minor          Minor version number                                                                                           
    version        The system version                                                                                             
    ============== ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ======== ===================== 
    Key      Value                 
    -------- --------------------- 
    build    Build version number  
    major    Major version number  
    minor    Minor version number  
    version  The system version    
    ======== =====================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ======== ===================== 
    Key      Value                 
    -------- --------------------- 
    build    Build version number  
    major    Major version number  
    minor    Minor version number  
    version  The system version    
    ======== =====================





:query:`check_pagefile`
-----------------------
.. query:: check_pagefile
    :synopsis: Check the size of the system pagefile(s).

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | used > 60% | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | used > 80% | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
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
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    free           Free memory in bytes (g,m,k,b) or percentages %                                                                
    free_pct       % free memory                                                                                                  
    name           The name of the page file (location)                                                                           
    size           Total size of pagefile                                                                                         
    used           Used memory in bytes (g,m,k,b) or percentages %                                                                
    used_pct       % used memory                                                                                                  
    ============== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    free           Free memory in bytes (g,m,k,b) or percentages %                                                                
    free_pct       % free memory                                                                                                  
    name           The name of the page file (location)                                                                           
    size           Total size of pagefile                                                                                         
    used           Used memory in bytes (g,m,k,b) or percentages %                                                                
    used_pct       % used memory                                                                                                  
    ============== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    free           Free memory in bytes (g,m,k,b) or percentages %                                                                
    free_pct       % free memory                                                                                                  
    name           The name of the page file (location)                                                                           
    size           Total size of pagefile                                                                                         
    used           Used memory in bytes (g,m,k,b) or percentages %                                                                
    used_pct       % used memory                                                                                                  
    ============== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    free           Free memory in bytes (g,m,k,b) or percentages %                                                                
    free_pct       % free memory                                                                                                  
    name           The name of the page file (location)                                                                           
    size           Total size of pagefile                                                                                         
    used           Used memory in bytes (g,m,k,b) or percentages %                                                                
    used_pct       % used memory                                                                                                  
    ============== ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ========= ================================================ 
    Key       Value                                            
    --------- ------------------------------------------------ 
    free      Free memory in bytes (g,m,k,b) or percentages %  
    free_pct  % free memory                                    
    name      The name of the page file (location)             
    size      Total size of pagefile                           
    used      Used memory in bytes (g,m,k,b) or percentages %  
    used_pct  % used memory                                    
    ========= ================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ========= ================================================ 
    Key       Value                                            
    --------- ------------------------------------------------ 
    free      Free memory in bytes (g,m,k,b) or percentages %  
    free_pct  % free memory                                    
    name      The name of the page file (location)             
    size      Total size of pagefile                           
    used      Used memory in bytes (g,m,k,b) or percentages %  
    used_pct  % used memory                                    
    ========= ================================================





:query:`check_pdh`
------------------
.. query:: check_pdh
    :synopsis: Check the value of a performance (PDH) counter on the local or remote system.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` |  | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` |  | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
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
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    alias          The counter alias                                                                                              
    counter        The counter name                                                                                               
    time           The time for rrd checks                                                                                        
    value          The counter value (either float or int)                                                                        
    value_f        The counter value (force float value)                                                                          
    value_i        The counter value (force int value)                                                                            
    ============== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    alias          The counter alias                                                                                              
    counter        The counter name                                                                                               
    time           The time for rrd checks                                                                                        
    value          The counter value (either float or int)                                                                        
    value_f        The counter value (force float value)                                                                          
    value_i        The counter value (force int value)                                                                            
    ============== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    alias          The counter alias                                                                                              
    counter        The counter name                                                                                               
    time           The time for rrd checks                                                                                        
    value          The counter value (either float or int)                                                                        
    value_f        The counter value (force float value)                                                                          
    value_i        The counter value (force int value)                                                                            
    ============== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    alias          The counter alias                                                                                              
    counter        The counter name                                                                                               
    time           The time for rrd checks                                                                                        
    value          The counter value (either float or int)                                                                        
    value_f        The counter value (force float value)                                                                          
    value_i        The counter value (force int value)                                                                            
    ============== ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ======== ======================================== 
    Key      Value                                    
    -------- ---------------------------------------- 
    alias    The counter alias                        
    counter  The counter name                         
    time     The time for rrd checks                  
    value    The counter value (either float or int)  
    value_f  The counter value (force float value)    
    value_i  The counter value (force int value)      
    ======== ========================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ======== ======================================== 
    Key      Value                                    
    -------- ---------------------------------------- 
    alias    The counter alias                        
    counter  The counter name                         
    time     The time for rrd checks                  
    value    The counter value (either float or int)  
    value_f  The counter value (force float value)    
    value_i  The counter value (force int value)      
    ======== ========================================





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

    :option:`filter` | state != 'unreadable' | Filter which marks interesting items.
    :option:`warning` | state not in ('started') | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | state = 'stopped', count = 0 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
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
    :option:`total` | N/A | Include the total of all matching files



Samples
*******

.. include:: ../../samples/CheckSystem_check_process_samples.inc



Arguments
*********
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.

.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.

.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.

.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ================= ============================================================================================================== 
    Key               Value                                                                                                          
    ----------------- -------------------------------------------------------------------------------------------------------------- 
    count             Number of items matching the filter. Common option for all checks.                                             
    total              Total number of items. Common option for all checks.                                                          
    ok_count           Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count         Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count         Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count      Number of items matched either warning or critical criteria. Common option for all checks.                    
    list               A list of all items which matched the filter. Common option for all checks.                                   
    ok_list            A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list          A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list          A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list       A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list        A special list with critical, then warning and finally ok. Common option for all checks.                      
    status             The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
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
    ================= ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ================= ====================================================== 
    Key               Value                                                  
    ----------------- ------------------------------------------------------ 
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
    ================= ======================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================= ====================================================== 
    Key               Value                                                  
    ----------------- ------------------------------------------------------ 
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
    ================= ======================================================





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

.. option:: total
    :synopsis: Include the total of all matching files

    | Include the total of all matching files

:query:`check_service`
----------------------
.. query:: check_service
    :synopsis: Check the state of one or more of the computer services.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | not state_is_perfect() | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | not state_is_ok() | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`top-syntax` | ${status}: ${crit_list}, delayed (${warn_list}) | Top level syntax.
    :option:`ok-syntax` | %(status): All %(count) service(s) are ok. | ok syntax.
    :option:`empty-syntax` | %(status): No services found | Empty syntax.
    :option:`detail-syntax` | ${name}=${state} (${start_type}) | Detail level syntax.
    :option:`perf-syntax` | ${name} | Performance alias syntax.
    :option:`computer` |  | The name of the remote computer to check
    :option:`service` |  | The service to check, set this to * to check all services
    :option:`exclude` |  | A list of services to ignore (mainly usefull in combination with service=*)
    :option:`type` | service | The types of services to enumerate available types are driver, file-system-driver, kernel-driver, service, service-own-process, service-share-process
    :option:`state` | all | The types of services to enumerate available states are active, inactive or all
    :option:`only-essential` | N/A | Set filter to classification = 'essential'
    :option:`only-ignored` | N/A | Set filter to classification = 'ignored'
    :option:`only-role` | N/A | Set filter to classification = 'role'
    :option:`only-supporting` | N/A | Set filter to classification = 'supporting'
    :option:`only-system` | N/A | Set filter to classification = 'system'
    :option:`only-user` | N/A | Set filter to classification = 'user'



Samples
*******

.. include:: ../../samples/CheckSystem_check_service_samples.inc



Arguments
*********
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    =================== ============================================================================================================== 
    Key                 Value                                                                                                          
    ------------------- -------------------------------------------------------------------------------------------------------------- 
    count               Number of items matching the filter. Common option for all checks.                                             
    total                Total number of items. Common option for all checks.                                                          
    ok_count             Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count           Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count           Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count        Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                 A list of all items which matched the filter. Common option for all checks.                                   
    ok_list              A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list            A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list            A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list         A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list          A special list with critical, then warning and finally ok. Common option for all checks.                      
    status               The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    classification      Get classification                                                                                             
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
    =================== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    =================== ============================================================================================================== 
    Key                 Value                                                                                                          
    ------------------- -------------------------------------------------------------------------------------------------------------- 
    count               Number of items matching the filter. Common option for all checks.                                             
    total                Total number of items. Common option for all checks.                                                          
    ok_count             Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count           Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count           Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count        Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                 A list of all items which matched the filter. Common option for all checks.                                   
    ok_list              A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list            A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list            A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list         A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list          A special list with critical, then warning and finally ok. Common option for all checks.                      
    status               The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    classification      Get classification                                                                                             
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
    =================== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    =================== ============================================================================================================== 
    Key                 Value                                                                                                          
    ------------------- -------------------------------------------------------------------------------------------------------------- 
    count               Number of items matching the filter. Common option for all checks.                                             
    total                Total number of items. Common option for all checks.                                                          
    ok_count             Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count           Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count           Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count        Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                 A list of all items which matched the filter. Common option for all checks.                                   
    ok_list              A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list            A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list            A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list         A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list          A special list with critical, then warning and finally ok. Common option for all checks.                      
    status               The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    classification      Get classification                                                                                             
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
    =================== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    =================== ============================================================================================================== 
    Key                 Value                                                                                                          
    ------------------- -------------------------------------------------------------------------------------------------------------- 
    count               Number of items matching the filter. Common option for all checks.                                             
    total                Total number of items. Common option for all checks.                                                          
    ok_count             Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count           Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count           Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count        Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                 A list of all items which matched the filter. Common option for all checks.                                   
    ok_list              A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list            A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list            A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list         A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list          A special list with critical, then warning and finally ok. Common option for all checks.                      
    status               The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    classification      Get classification                                                                                             
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
    =================== ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    =================== ========================================================================================================== 
    Key                 Value                                                                                                      
    ------------------- ---------------------------------------------------------------------------------------------------------- 
    classification      Get classification                                                                                         
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
    =================== ==========================================================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    =================== ========================================================================================================== 
    Key                 Value                                                                                                      
    ------------------- ---------------------------------------------------------------------------------------------------------- 
    classification      Get classification                                                                                         
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
    =================== ==========================================================================================================





.. option:: computer
    :synopsis: The name of the remote computer to check

    | The name of the remote computer to check

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

.. option:: only-essential
    :synopsis: Set filter to classification = 'essential'

    | Set filter to classification = 'essential'

.. option:: only-ignored
    :synopsis: Set filter to classification = 'ignored'

    | Set filter to classification = 'ignored'

.. option:: only-role
    :synopsis: Set filter to classification = 'role'

    | Set filter to classification = 'role'

.. option:: only-supporting
    :synopsis: Set filter to classification = 'supporting'

    | Set filter to classification = 'supporting'

.. option:: only-system
    :synopsis: Set filter to classification = 'system'

    | Set filter to classification = 'system'

.. option:: only-user
    :synopsis: Set filter to classification = 'user'

    | Set filter to classification = 'user'

:query:`check_uptime`
---------------------
.. query:: check_uptime
    :synopsis: Check time since last server re-boot.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`filter` |  | Filter which marks interesting items.
    :option:`warning` | uptime < 2d | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | uptime < 1d | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
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
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    boot           System boot time                                                                                               
    uptime         Time since last boot                                                                                           
    ============== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    boot           System boot time                                                                                               
    uptime         Time since last boot                                                                                           
    ============== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    boot           System boot time                                                                                               
    uptime         Time since last boot                                                                                           
    ============== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    boot           System boot time                                                                                               
    uptime         Time since last boot                                                                                           
    ============== ==============================================================================================================





.. option:: debug
    :synopsis: Show debugging information in the log

    | Show debugging information in the log

.. option:: show-all
    :synopsis: Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

    | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).

.. option:: empty-state
    :synopsis: Return status to use when nothing matched filter.

    | Return status to use when nothing matched filter.
    | If no filter is specified this will never happen unless the file is empty.

.. option:: perf-config
    :synopsis: Performance data generation configuration

    | Performance data generation configuration
    | TODO: obj ( key: value; key: value) obj (key:valuer;key:value)

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

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

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include text as well as special keywords which will include information from the checks.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





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

    ============== ============================================================================================================== 
    Key            Value                                                                                                          
    -------------- -------------------------------------------------------------------------------------------------------------- 
    count          Number of items matching the filter. Common option for all checks.                                             
    total           Total number of items. Common option for all checks.                                                          
    ok_count        Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count      Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count      Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count   Number of items matched either warning or critical criteria. Common option for all checks.                    
    list            A list of all items which matched the filter. Common option for all checks.                                   
    ok_list         A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list       A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list       A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list    A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list     A special list with critical, then warning and finally ok. Common option for all checks.                      
    status          The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    ============== ==============================================================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | Used to format each resulting item in the message.
    | %(list) will be replaced with all the items formated by this syntax string in the top-syntax.
    | To add a keyword to the message you can use two syntaxes either ${keyword} or %(keyword) (there is no difference between them apart from ${} can be difficult to excpae on linux).
    | The available keywords are:

    ======= ===================== 
    Key     Value                 
    ------- --------------------- 
    boot    System boot time      
    uptime  Time since last boot  
    ======= =====================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ======= ===================== 
    Key     Value                 
    ------- --------------------- 
    boot    System boot time      
    uptime  Time since last boot  
    ======= =====================





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


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`disk_queue_length` |  | disk_queue_length

    **Sample**::

        # COUNTERS
        # Add counters to check
        [/settings/system/windows/counters]
        disk_queue_length=


    .. confkey:: disk_queue_length
        :synopsis: disk_queue_length

        **disk_queue_length**

        | To configure this create a section under: /settings/system/windows/counters/disk_queue_length

        **Path**: /settings/system/windows/counters

        **Key**: disk_queue_length

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters]
            # disk_queue_length
            disk_queue_length=




…  / counters / default
-----------------------

.. confpath:: /settings/system/windows/counters/default
    :synopsis: COUNTER

**COUNTER**

    | Definition for counter: default


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias` |  | ALIAS
        :confkey:`buffer size` |  | BUFFER SIZE
        :confkey:`collection strategy` |  | COLLECTION STRATEGY
        :confkey:`counter` |  | COUNTER
        :confkey:`flags` |  | FLAGS
        :confkey:`instances` |  | Interpret instances
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT
        :confkey:`type` |  | COUNTER TYPE

    **Sample**::

        # COUNTER
        # Definition for counter: default
        [/settings/system/windows/counters/default]
        alias=
        buffer size=
        collection strategy=
        counter=
        flags=
        instances=
        is template=0
        parent=default
        type=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/counters/default

        **Key**: alias

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # ALIAS
            alias=


    .. confkey:: buffer size
        :synopsis: BUFFER SIZE

        **BUFFER SIZE**

        | Size of buffer (in seconds) larger buffer use more memory

        **Path**: /settings/system/windows/counters/default

        **Key**: buffer size

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # BUFFER SIZE
            buffer size=


    .. confkey:: collection strategy
        :synopsis: COLLECTION STRATEGY

        **COLLECTION STRATEGY**

        | The way to handled values when collecting them: static means we keep the last known value, rrd means we store values in a buffer from which you can retrieve the average

        **Path**: /settings/system/windows/counters/default

        **Key**: collection strategy

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # COLLECTION STRATEGY
            collection strategy=


    .. confkey:: counter
        :synopsis: COUNTER

        **COUNTER**

        | The counter to check

        **Path**: /settings/system/windows/counters/default

        **Key**: counter

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # COUNTER
            counter=


    .. confkey:: flags
        :synopsis: FLAGS

        **FLAGS**

        | Extra flags to configure the counter (nocap100, 1000, noscale)

        **Path**: /settings/system/windows/counters/default

        **Key**: flags

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # FLAGS
            flags=


    .. confkey:: instances
        :synopsis: Interpret instances

        **Interpret instances**

        | IF we shoul interpret instance (default auto). Values: auto, true, false

        **Path**: /settings/system/windows/counters/default

        **Key**: instances

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # Interpret instances
            instances=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/counters/default

        **Key**: is template

        **Default value**: 0

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/counters/default

        **Key**: parent

        **Default value**: default

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # PARENT
            parent=default


    .. confkey:: type
        :synopsis: COUNTER TYPE

        **COUNTER TYPE**

        | The type of counter to use long, large and double

        **Path**: /settings/system/windows/counters/default

        **Key**: type

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/default]
            # COUNTER TYPE
            type=




…  / counters / sample
----------------------

.. confpath:: /settings/system/windows/counters/sample
    :synopsis: COUNTER

**COUNTER**

    | Definition for counter: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias` |  | ALIAS
        :confkey:`buffer size` |  | BUFFER SIZE
        :confkey:`collection strategy` |  | COLLECTION STRATEGY
        :confkey:`counter` |  | COUNTER
        :confkey:`flags` |  | FLAGS
        :confkey:`instances` |  | Interpret instances
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`parent` | default | PARENT
        :confkey:`type` |  | COUNTER TYPE

    **Sample**::

        # COUNTER
        # Definition for counter: sample
        [/settings/system/windows/counters/sample]
        alias=
        buffer size=
        collection strategy=
        counter=
        flags=
        instances=
        is template=0
        parent=default
        type=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/counters/sample

        **Key**: alias

        **Default value**: 

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # ALIAS
            alias=


    .. confkey:: buffer size
        :synopsis: BUFFER SIZE

        **BUFFER SIZE**

        | Size of buffer (in seconds) larger buffer use more memory

        **Path**: /settings/system/windows/counters/sample

        **Key**: buffer size

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # BUFFER SIZE
            buffer size=


    .. confkey:: collection strategy
        :synopsis: COLLECTION STRATEGY

        **COLLECTION STRATEGY**

        | The way to handled values when collecting them: static means we keep the last known value, rrd means we store values in a buffer from which you can retrieve the average

        **Path**: /settings/system/windows/counters/sample

        **Key**: collection strategy

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # COLLECTION STRATEGY
            collection strategy=


    .. confkey:: counter
        :synopsis: COUNTER

        **COUNTER**

        | The counter to check

        **Path**: /settings/system/windows/counters/sample

        **Key**: counter

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # COUNTER
            counter=


    .. confkey:: flags
        :synopsis: FLAGS

        **FLAGS**

        | Extra flags to configure the counter (nocap100, 1000, noscale)

        **Path**: /settings/system/windows/counters/sample

        **Key**: flags

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # FLAGS
            flags=


    .. confkey:: instances
        :synopsis: Interpret instances

        **Interpret instances**

        | IF we shoul interpret instance (default auto). Values: auto, true, false

        **Path**: /settings/system/windows/counters/sample

        **Key**: instances

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # Interpret instances
            instances=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/counters/sample

        **Key**: is template

        **Default value**: 0

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # IS TEMPLATE
            is template=0


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/system/windows/counters/sample

        **Key**: parent

        **Default value**: default

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # PARENT
            parent=default


    .. confkey:: type
        :synopsis: COUNTER TYPE

        **COUNTER TYPE**

        | The type of counter to use long, large and double

        **Path**: /settings/system/windows/counters/sample

        **Key**: type

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckSystem`

        **Sample**::

            [/settings/system/windows/counters/sample]
            # COUNTER TYPE
            type=




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


