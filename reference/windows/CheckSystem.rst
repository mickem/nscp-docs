.. default-domain:: nscp

.. module:: CheckSystem
    :synopsis: Various system related checks, such as CPU load, process state, service state memory usage and PDH counters.

=====================================
:module:`CheckSystem` --- CheckSystem
=====================================
Various system related checks, such as CPU load, process state, service state memory usage and PDH counters.

**Queries (Overview)**:

A list of all avalible queries (check commands)

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

    check_counter | :query:`check_pdh`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/default` | :confkey:`~/settings/default.allowed hosts` | ALLOWED HOSTS
    :confpath:`/settings/default` | :confkey:`~/settings/default.bind to` | BIND TO ADDRESS
    :confpath:`/settings/default` | :confkey:`~/settings/default.cache allowed hosts` | CACHE ALLOWED HOSTS
    :confpath:`/settings/default` | :confkey:`~/settings/default.inbox` | INBOX
    :confpath:`/settings/default` | :confkey:`~/settings/default.password` | PASSWORD
    :confpath:`/settings/default` | :confkey:`~/settings/default.timeout` | TIMEOUT
    :confpath:`/settings/system/windows` | :confkey:`~/settings/system/windows.default buffer length` | DEFAULT LENGTH

Advanced keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/default` | :confkey:`~/settings/default.encoding` | NRPE PAYLOAD ENCODING
    :confpath:`/settings/default` | :confkey:`~/settings/default.modern commands` | Register modern aliases for built-in commands
    :confpath:`/settings/default` | :confkey:`~/settings/default.socket queue size` | LISTEN QUEUE
    :confpath:`/settings/default` | :confkey:`~/settings/default.thread pool` | THREAD POOL
    :confpath:`/settings/system/windows` | :confkey:`~/settings/system/windows.modern commands` | Register modern aliases for built-in commands
    :confpath:`/settings/system/windows` | :confkey:`~/settings/system/windows.subsystem` | PDH SUBSYSTEM

Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.alias` | ALIAS
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.check` | TYPE OF CHECK
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.command` | COMMAND NAME
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.critical` | CRITCAL FILTER
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.debug` | DEBUG
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.destination` | DESTINATION
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.detail syntax` | SYNTAX
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.empty message` | EMPTY MESSAGE
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.filter` | FILTER
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.is template` | IS TEMPLATE
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.maximum age` | MAGIMUM AGE
    :confpath:`/settings/system/windows/real-time/checks/sample` | :confkey:`~/settings/system/windows/real-time/checks/sample.ok` | OK FILTER
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
A quick reference for all avalible queries (check commands) in the CheckSystem module.

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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | N/A | Filter which marks interesting items.
    :option:`warning` | N/A | Filter which marks items which generates a warning state.
    :option:`warn` | N/A | Short alias for warning
    :option:`critical` | N/A | Filter which marks items which generates a critical state.
    :option:`crit` | N/A | Short alias for critical.
    :option:`ok` | N/A | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | CPU Load ok | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` | N/A | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${problem_list} | Top level syntax.
    :option:`detail-syntax` | ${time}: ${load}% | Detail level syntax.
    :option:`perf-syntax` | ${core} ${time} | Performance alias syntax.
    :option:`time` | N/A | The time to check


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
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





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

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | N/A | Filter which marks interesting items.
    :option:`warning` | N/A | Filter which marks items which generates a warning state.
    :option:`warn` | N/A | Short alias for warning
    :option:`critical` | N/A | Filter which marks items which generates a critical state.
    :option:`crit` | N/A | Short alias for critical.
    :option:`ok` | N/A | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | OK memory within bounds. | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` | N/A | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${problem_list} | Top level syntax.
    :option:`detail-syntax` | ${type} = ${used} | Detail level syntax.
    :option:`perf-syntax` | ${type} | Performance alias syntax.
    :option:`type` | N/A | The type of memory to check (physical = Physical memory (RAM), committed = total memory (RAM+PAGE)


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
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
      free           Free memory in bytes (g,m,k,b) or percentages %                                 
      size           Total size of memory                                                            
      type           The type of memory to check                                                     
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
      free           Free memory in bytes (g,m,k,b) or percentages %                                 
      size           Total size of memory                                                            
      type           The type of memory to check                                                     
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
      free           Free memory in bytes (g,m,k,b) or percentages %                                 
      size           Total size of memory                                                            
      type           The type of memory to check                                                     
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
      free           Free memory in bytes (g,m,k,b) or percentages %                                 
      size           Total size of memory                                                            
      type           The type of memory to check                                                     
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





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

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
      %(size)           Total size of memory                                                            
      %(type)           The type of memory to check                                                     
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
      %(size)           Total size of memory                                                            
      %(type)           The type of memory to check                                                     
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      %(free)           Free memory in bytes (g,m,k,b) or percentages %                                 
      %(size)           Total size of memory                                                            
      %(type)           The type of memory to check                                                     
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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | N/A | Filter which marks interesting items.
    :option:`warning` | N/A | Filter which marks items which generates a warning state.
    :option:`warn` | N/A | Short alias for warning
    :option:`critical` | N/A | Filter which marks items which generates a critical state.
    :option:`crit` | N/A | Short alias for critical.
    :option:`ok` | N/A | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | Version ok | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` | N/A | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${list} | Top level syntax.
    :option:`detail-syntax` | ${version} (${major}.${minor}.${build}) | Detail level syntax.
    :option:`perf-syntax` | version | Performance alias syntax.


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
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





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

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | N/A | Filter which marks interesting items.
    :option:`warning` | N/A | Filter which marks items which generates a warning state.
    :option:`warn` | N/A | Short alias for warning
    :option:`critical` | N/A | Filter which marks items which generates a critical state.
    :option:`crit` | N/A | Short alias for critical.
    :option:`ok` | N/A | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | OK pagefile within bounds. | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` | N/A | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${problem_list} | Top level syntax.
    :option:`detail-syntax` | ${name} ${used} (${size}) | Detail level syntax.
    :option:`perf-syntax` | ${name} | Performance alias syntax.


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
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





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

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | N/A | Filter which marks interesting items.
    :option:`warning` | N/A | Filter which marks items which generates a warning state.
    :option:`warn` | N/A | Short alias for warning
    :option:`critical` | N/A | Filter which marks items which generates a critical state.
    :option:`crit` | N/A | Short alias for critical.
    :option:`ok` | N/A | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | Everything looks good | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` | N/A | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${problem_list} | Top level syntax.
    :option:`detail-syntax` | ${counter} = ${value} | Detail level syntax.
    :option:`perf-syntax` | ${alias} | Performance alias syntax.
    :option:`counter` | N/A | Performance counter to check
    :option:`expand-index` | N/A | Expand indexes in counter strings
    :option:`instances` | N/A | Expand wildcards and fetch all instances
    :option:`reload` | N/A | Reload counters on errors (useful to check counters which are not added at boot)
    :option:`averages` | N/A | Check average values (ie. wait for 1 second to collecting two samples)
    :option:`time` | N/A | Timeframe to use for named rrd counters
    :option:`flags` | N/A | Extra flags to configure the counter (nocap100, 1000, noscale)
    :option:`type` | large | Format of value (double, long, large)


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
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





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

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | N/A | Filter which marks interesting items.
    :option:`warning` | N/A | Filter which marks items which generates a warning state.
    :option:`warn` | N/A | Short alias for warning
    :option:`critical` | N/A | Filter which marks items which generates a critical state.
    :option:`crit` | N/A | Short alias for critical.
    :option:`ok` | N/A | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | OK all processes are ok. | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` | N/A | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${problem_list} | Top level syntax.
    :option:`detail-syntax` | ${exe}=${state} | Detail level syntax.
    :option:`perf-syntax` | ${exe} | Performance alias syntax.
    :option:`process` | N/A | The service to check, set this to * to check all services
    :option:`scan-info` | N/A | If all process metrics should be fetched (otherwise only status is fetched)
    :option:`scan-16bit` | N/A | If 16bit processes should be included
    :option:`delta` | N/A | Calculate delta over one elapsed second.
    :option:`scan-unreadable` | N/A | If unreadable processes should be included (will not have information)


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
    | Avalible options:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      command_line      Command line of process (not always available)                                  
      creation          Creation time                                                                   
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
      status             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      command_line      Command line of process (not always available)                                  
      creation          Creation time                                                                   
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
      status             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      command_line      Command line of process (not always available)                                  
      creation          Creation time                                                                   
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
      status             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      command_line      Command line of process (not always available)                                  
      creation          Creation time                                                                   
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
      status             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





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

      ==================== =============================================================================== 
      Key                  Value                                                                           
      ==================== =============================================================================== 
      %(command_line)      Command line of process (not always available)                                  
      %(creation)          Creation time                                                                   
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
      ${status}             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ==================== ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

      ==================== =============================================================================== 
      Key                  Value                                                                           
      ==================== =============================================================================== 
      %(command_line)      Command line of process (not always available)                                  
      %(creation)          Creation time                                                                   
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
      ${status}             The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ==================== ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

      ==================== =============================================================================== 
      Key                  Value                                                                           
      ==================== =============================================================================== 
      %(command_line)      Command line of process (not always available)                                  
      %(creation)          Creation time                                                                   
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
    | This call will mesure values and then sleep for 2 second and then measure again caluclating deltas.

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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | N/A | Filter which marks interesting items.
    :option:`warning` | N/A | Filter which marks items which generates a warning state.
    :option:`warn` | N/A | Short alias for warning
    :option:`critical` | N/A | Filter which marks items which generates a critical state.
    :option:`crit` | N/A | Short alias for critical.
    :option:`ok` | N/A | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | OK all services are ok. | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` | N/A | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${crit_list}, delayed (${warn_list}) | Top level syntax.
    :option:`detail-syntax` | ${name}=${state} (${start_type}) | Detail level syntax.
    :option:`perf-syntax` | ${name} | Performance alias syntax.
    :option:`computer` | N/A | THe name of the remote computer to check
    :option:`service` | N/A | The service to check, set this to * to check all services
    :option:`exclude` | N/A | A list of services to ignore (mainly usefull in combination with service=*)
    :option:`type` | service | The types of services to enumerate available types are driver, file-system-driver, kernel-driver, service, service-own-process, service-share-process
    :option:`state` | all | The types of services to enumerate available states are active, inactive or all


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
    | Avalible options:

      =================== ========================================================================================================== 
      Key                 Value                                                                                                      
      =================== ========================================================================================================== 
      delayed             If the service is delayed                                                                                  
      desc                Service description                                                                                        
      legacy_state        Get legacy state (deprecated and only used by check_nt)                                                    
      name                Service name                                                                                               
      pid                 Process id                                                                                                 
      start_type          The configured start type ()                                                                               
      state               The current state ()                                                                                       
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
      status               The returned status (OK/WARN/CRIT/UNKNOWN)                                                                
      =================== ==========================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      =================== ========================================================================================================== 
      Key                 Value                                                                                                      
      =================== ========================================================================================================== 
      delayed             If the service is delayed                                                                                  
      desc                Service description                                                                                        
      legacy_state        Get legacy state (deprecated and only used by check_nt)                                                    
      name                Service name                                                                                               
      pid                 Process id                                                                                                 
      start_type          The configured start type ()                                                                               
      state               The current state ()                                                                                       
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
      status               The returned status (OK/WARN/CRIT/UNKNOWN)                                                                
      =================== ==========================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      =================== ========================================================================================================== 
      Key                 Value                                                                                                      
      =================== ========================================================================================================== 
      delayed             If the service is delayed                                                                                  
      desc                Service description                                                                                        
      legacy_state        Get legacy state (deprecated and only used by check_nt)                                                    
      name                Service name                                                                                               
      pid                 Process id                                                                                                 
      start_type          The configured start type ()                                                                               
      state               The current state ()                                                                                       
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
      status               The returned status (OK/WARN/CRIT/UNKNOWN)                                                                
      =================== ==========================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      =================== ========================================================================================================== 
      Key                 Value                                                                                                      
      =================== ========================================================================================================== 
      delayed             If the service is delayed                                                                                  
      desc                Service description                                                                                        
      legacy_state        Get legacy state (deprecated and only used by check_nt)                                                    
      name                Service name                                                                                               
      pid                 Process id                                                                                                 
      start_type          The configured start type ()                                                                               
      state               The current state ()                                                                                       
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
      status               The returned status (OK/WARN/CRIT/UNKNOWN)                                                                
      =================== ==========================================================================================================





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

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      %(delayed)        If the service is delayed                                                       
      %(desc)           Service description                                                             
      %(legacy_state)   Get legacy state (deprecated and only used by check_nt)                         
      %(name)           Service name                                                                    
      %(pid)            Process id                                                                      
      %(start_type)     The configured start type ()                                                    
      %(state)          The current state ()                                                            
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      %(delayed)        If the service is delayed                                                       
      %(desc)           Service description                                                             
      %(legacy_state)   Get legacy state (deprecated and only used by check_nt)                         
      %(name)           Service name                                                                    
      %(pid)            Process id                                                                      
      %(start_type)     The configured start type ()                                                    
      %(state)          The current state ()                                                            
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
      %(delayed)        If the service is delayed                                                       
      %(desc)           Service description                                                             
      %(legacy_state)   Get legacy state (deprecated and only used by check_nt)                         
      %(name)           Service name                                                                    
      %(pid)            Process id                                                                      
      %(start_type)     The configured start type ()                                                    
      %(state)          The current state ()                                                            
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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show debugging information in the log
    :option:`filter` | N/A | Filter which marks interesting items.
    :option:`warning` | N/A | Filter which marks items which generates a warning state.
    :option:`warn` | N/A | Short alias for warning
    :option:`critical` | N/A | Filter which marks items which generates a critical state.
    :option:`crit` | N/A | Short alias for critical.
    :option:`ok` | N/A | Filter which marks items which generates an ok state.
    :option:`empty-syntax` | Uptime ok | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` | N/A | Performance data generation configuration
    :option:`top-syntax` | ${status}: ${list} | Top level syntax.
    :option:`detail-syntax` | uptime: ${uptime}h, boot: ${boot} (UTC) | Detail level syntax.
    :option:`perf-syntax` | uptime | Performance alias syntax.


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
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      ============== =============================================================================== 
      Key            Value                                                                           
      ============== =============================================================================== 
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
      status          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ============== ===============================================================================





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

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
      ${status}          The returned status (OK/WARN/CRIT/UNKNOWN)                                     
      ================= ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

      ================= =============================================================================== 
      Key               Value                                                                           
      ================= =============================================================================== 
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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`Counter` | N/A | The time to check
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` | N/A | Maximum value before a warning is returned.
    :option:`MaxCrit` | N/A | Maximum value before a critical is returned.
    :option:`MinWarn` | N/A | Minimum value before a warning is returned.
    :option:`MinCrit` | N/A | Minimum value before a critical is returned.


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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`time` | N/A | The time to check
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` | N/A | Maximum value before a warning is returned.
    :option:`MaxCrit` | N/A | Maximum value before a critical is returned.
    :option:`MinWarn` | N/A | Minimum value before a warning is returned.
    :option:`MinCrit` | N/A | Minimum value before a critical is returned.
    :option:`warn` | N/A | Maximum value before a warning is returned.
    :option:`crit` | N/A | Maximum value before a critical is returned.


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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`type` | N/A | The types to check
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` | N/A | Maximum value before a warning is returned.
    :option:`MaxCrit` | N/A | Maximum value before a critical is returned.
    :option:`MinWarn` | N/A | Minimum value before a warning is returned.
    :option:`MinCrit` | N/A | Minimum value before a critical is returned.
    :option:`warn` | N/A | Maximum value before a warning is returned.
    :option:`crit` | N/A | Maximum value before a critical is returned.


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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarnCount` | N/A | Maximum value before a warning is returned.
    :option:`MaxCritCount` | N/A | Maximum value before a critical is returned.
    :option:`MinWarnCount` | N/A | Minimum value before a warning is returned.
    :option:`MinCritCount` | N/A | Minimum value before a critical is returned.


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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`CheckAll` | true | Check all services.
    :option:`exclude` | N/A | Exclude services
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).


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
    :option:`help-csv` | N/A | Show help screen as a comma separated list. 
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` | N/A | Maximum value before a warning is returned.
    :option:`MaxCrit` | N/A | Maximum value before a critical is returned.
    :option:`MinWarn` | N/A | Minimum value before a warning is returned.
    :option:`MinCrit` | N/A | Minimum value before a critical is returned.
    :option:`warn` | N/A | Maximum value before a warning is returned.
    :option:`crit` | N/A | Maximum value before a critical is returned.


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






… default
---------
.. confpath:: /settings/default
    :synopsis: 

    ****




.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`allowed hosts` | 127.0.0.1 | ALLOWED HOSTS
    :confkey:`bind to` |  | BIND TO ADDRESS
    :confkey:`cache allowed hosts` | 1 | CACHE ALLOWED HOSTS
    :confkey:`encoding` |  | NRPE PAYLOAD ENCODING
    :confkey:`inbox` | inbox | INBOX
    :confkey:`modern commands` | 1 | Register modern aliases for built-in commands
    :confkey:`password` |  | PASSWORD
    :confkey:`socket queue size` | 0 | LISTEN QUEUE
    :confkey:`thread pool` | 10 | THREAD POOL
    :confkey:`timeout` | 30 | TIMEOUT


**Sample**::

    # 
    # 
    [/settings/default]
    allowed hosts=127.0.0.1
    bind to=
    cache allowed hosts=1
    encoding=
    inbox=inbox
    modern commands=1
    password=
    socket queue size=0
    thread pool=10
    timeout=30


.. confkey:: allowed hosts
    :synopsis: ALLOWED HOSTS

    **ALLOWED HOSTS**

    | A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges.

    **Path**: /settings/default

    **Key**: allowed hosts

    **Default value**: 127.0.0.1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # ALLOWED HOSTS
        # A comaseparated list of allowed hosts. You can use netmasks (/ syntax) or * to create ranges.
        [/settings/default]
        allowed hosts=127.0.0.1


.. confkey:: bind to
    :synopsis: BIND TO ADDRESS

    **BIND TO ADDRESS**

    | Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses.

    **Path**: /settings/default

    **Key**: bind to

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # BIND TO ADDRESS
        # Allows you to bind server to a specific local address. This has to be a dotted ip address not a host name. Leaving this blank will bind to all available IP addresses.
        [/settings/default]
        bind to=


.. confkey:: cache allowed hosts
    :synopsis: CACHE ALLOWED HOSTS

    **CACHE ALLOWED HOSTS**

    | If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server.

    **Path**: /settings/default

    **Key**: cache allowed hosts

    **Default value**: 1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # CACHE ALLOWED HOSTS
        # If host names (DNS entries) should be cached, improves speed and security somewhat but won't allow you to have dynamic IPs for your Nagios server.
        [/settings/default]
        cache allowed hosts=1


.. confkey:: encoding
    :synopsis: NRPE PAYLOAD ENCODING

    **NRPE PAYLOAD ENCODING**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: encoding

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # NRPE PAYLOAD ENCODING
        # 
        [/settings/default]
        encoding=


.. confkey:: inbox
    :synopsis: INBOX

    **INBOX**

    | The default channel to post incoming messages on

    **Path**: /settings/default

    **Key**: inbox

    **Default value**: inbox

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # INBOX
        # The default channel to post incoming messages on
        [/settings/default]
        inbox=inbox


.. confkey:: modern commands
    :synopsis: Register modern aliases for built-in commands

    **Register modern aliases for built-in commands**

    | Register modern alias for commands (ccheck_xxx as opposed of CheckXXX) these are the names which will be used in future version of NSClient++

    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: modern commands

    **Default value**: 1

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # Register modern aliases for built-in commands
        # Register modern alias for commands (ccheck_xxx as opposed of CheckXXX) these are the names which will be used in future version of NSClient++
        [/settings/default]
        modern commands=1


.. confkey:: password
    :synopsis: PASSWORD

    **PASSWORD**

    | Password to use

    **Path**: /settings/default

    **Key**: password

    **Default value**: 

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # PASSWORD
        # Password to use
        [/settings/default]
        password=


.. confkey:: socket queue size
    :synopsis: LISTEN QUEUE

    **LISTEN QUEUE**

    | Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: socket queue size

    **Default value**: 0

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # LISTEN QUEUE
        # Number of sockets to queue before starting to refuse new incoming connections. This can be used to tweak the amount of simultaneous sockets that the server accepts.
        [/settings/default]
        socket queue size=0


.. confkey:: thread pool
    :synopsis: THREAD POOL

    **THREAD POOL**



    **Advanced** (means it is not commonly used)

    **Path**: /settings/default

    **Key**: thread pool

    **Default value**: 10

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # THREAD POOL
        # 
        [/settings/default]
        thread pool=10


.. confkey:: timeout
    :synopsis: TIMEOUT

    **TIMEOUT**

    | Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out.

    **Path**: /settings/default

    **Key**: timeout

    **Default value**: 30

    **Used by**: :module:`CheckMKServer`,  :module:`CheckSystem`,  :module:`NRPEServer`,  :module:`NSCAServer`,  :module:`NSClientServer`,  :module:`NSCPServer`,  :module:`WEBServer`

    **Sample**::

        # TIMEOUT
        # Timeout when reading packets on incoming sockets. If the data has not arrived within this time we will bail out.
        [/settings/default]
        timeout=30




… system / windows
------------------
.. confpath:: /settings/system/windows
    :synopsis: WINDOWS CHECK SYSTEM

    **WINDOWS CHECK SYSTEM**

    | Section for system checks and system settings


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`default buffer length` | 1h | DEFAULT LENGTH
    :confkey:`modern commands` | 1 | Register modern aliases for built-in commands
    :confkey:`subsystem` | default | PDH SUBSYSTEM


**Sample**::

    # WINDOWS CHECK SYSTEM
    # Section for system checks and system settings
    [/settings/system/windows]
    default buffer length=1h
    modern commands=1
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

        # DEFAULT LENGTH
        # Used to define the default interval for range buffer checks (ie. CPU).
        [/settings/system/windows]
        default buffer length=1h


.. confkey:: modern commands
    :synopsis: Register modern aliases for built-in commands

    **Register modern aliases for built-in commands**

    | Register modern alias for commands (ccheck_xxx as opposed of CheckXXX) these are the names which will be used in future version of NSClient++ parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.

    **Advanced** (means it is not commonly used)

    **Path**: /settings/system/windows

    **Key**: modern commands

    **Default value**: 1

    **Used by**: :module:`CheckSystem`

    **Sample**::

        # Register modern aliases for built-in commands
        # Register modern alias for commands (ccheck_xxx as opposed of CheckXXX) these are the names which will be used in future version of NSClient++ parent for this key is found under: /settings/default this is marked as advanced in favor of the parent.
        [/settings/system/windows]
        modern commands=1


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

        # PDH SUBSYSTEM
        # Set which pdh subsystem to use.
        [/settings/system/windows]
        subsystem=default




… system / windows / counters
-----------------------------
.. confpath:: /settings/system/windows/counters
    :synopsis: COUNTERS

    **COUNTERS**

    | Add counters to check




**Sample**::

    # COUNTERS
    # Add counters to check
    [/settings/system/windows/counters]




… system / windows / real-time
------------------------------
.. confpath:: /settings/system/windows/real-time
    :synopsis: CONFIGURE REALTIME CHECKING

    **CONFIGURE REALTIME CHECKING**

    | A set of options to configure the real time checks




**Sample**::

    # CONFIGURE REALTIME CHECKING
    # A set of options to configure the real time checks
    [/settings/system/windows/real-time]




… system / windows / real-time / checks
---------------------------------------
.. confpath:: /settings/system/windows/real-time/checks
    :synopsis: REALTIME FILTERS

    **REALTIME FILTERS**

    | A set of filters to use in real-time mode




**Sample**::

    # REALTIME FILTERS
    # A set of filters to use in real-time mode
    [/settings/system/windows/real-time/checks]




… system / windows / real-time / checks / sample
------------------------------------------------
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
    :confkey:`critical` |  | CRITCAL FILTER
    :confkey:`debug` | 0 | DEBUG
    :confkey:`destination` |  | DESTINATION
    :confkey:`detail syntax` |  | SYNTAX
    :confkey:`empty message` | eventlog found no records | EMPTY MESSAGE
    :confkey:`filter` |  | FILTER
    :confkey:`is template` | 0 | IS TEMPLATE
    :confkey:`maximum age` | 5m | MAGIMUM AGE
    :confkey:`ok` |  | OK FILTER
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

        # ALIAS
        # The alias (service name) to report to server
        [/settings/system/windows/real-time/checks/sample]
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

        # TYPE OF CHECK
        # The type of check cpu or memory
        [/settings/system/windows/real-time/checks/sample]
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

        # COMMAND NAME
        # The name of the command (think nagios service name) to report up stream (defaults to alias if not set)
        [/settings/system/windows/real-time/checks/sample]
        command=


.. confkey:: critical
    :synopsis: CRITCAL FILTER

    **CRITCAL FILTER**

    | If any rows match this filter severity will escalated to CRITCAL

    **Path**: /settings/system/windows/real-time/checks/sample

    **Key**: critical

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckSystem`

    **Sample**::

        # CRITCAL FILTER
        # If any rows match this filter severity will escalated to CRITCAL
        [/settings/system/windows/real-time/checks/sample]
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

        # DEBUG
        # Enable this to display debug information for this match filter
        [/settings/system/windows/real-time/checks/sample]
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

        # DESTINATION
        # The destination for intercepted messages
        [/settings/system/windows/real-time/checks/sample]
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

        # SYNTAX
        # Format string for dates
        [/settings/system/windows/real-time/checks/sample]
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

        # EMPTY MESSAGE
        # The message to display if nothing matches the filter (generally considered the ok state).
        [/settings/system/windows/real-time/checks/sample]
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

        # FILTER
        # Scan files for matching rows for each matching rows an OK message will be submitted
        [/settings/system/windows/real-time/checks/sample]
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

        # IS TEMPLATE
        # Declare this object as a template (this means it will not be available as a separate object)
        [/settings/system/windows/real-time/checks/sample]
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

        # MAGIMUM AGE
        # How long before reporting "ok".
        [/settings/system/windows/real-time/checks/sample]
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

        # OK FILTER
        # If any rows match this filter severity will escalated down to OK
        [/settings/system/windows/real-time/checks/sample]
        ok=


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

        # PARENT
        # The parent the target inherits from
        [/settings/system/windows/real-time/checks/sample]
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

        # PERF CONFIG
        # Performance data configuration
        [/settings/system/windows/real-time/checks/sample]
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

        # SEVERITY
        # THe severity of this message (OK, WARNING, CRITICAL, UNKNOWN)
        [/settings/system/windows/real-time/checks/sample]
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

        # DESTINATION
        # Same as destination
        [/settings/system/windows/real-time/checks/sample]
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

        # TIME
        # The time to check
        [/settings/system/windows/real-time/checks/sample]
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

        # FILES
        # A list of times to check (soma separated)
        [/settings/system/windows/real-time/checks/sample]
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

        # SYNTAX
        # Format string for dates
        [/settings/system/windows/real-time/checks/sample]
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

        # WARNING FILTER
        # If any rows match this filter severity will escalated to WARNING
        [/settings/system/windows/real-time/checks/sample]
        warning=




… system / windows / service mapping
------------------------------------
.. confpath:: /settings/system/windows/service mapping
    :synopsis: SERVICE MAPPING SECTION

    **SERVICE MAPPING SECTION**

    | Configure which services has to be in which state




**Sample**::

    # SERVICE MAPPING SECTION
    # Configure which services has to be in which state
    [/settings/system/windows/service mapping]


