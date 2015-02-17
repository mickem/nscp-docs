.. default-domain:: nscp

.. module:: CheckSystemUnix
    :synopsis: Various system related checks, such as CPU load, process state and memory.

=========================================
:module:`CheckSystemUnix` --- CheckSystem
=========================================
Various system related checks, such as CPU load, process state and memory.

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_memory` | Check free/used memory on the system.
    :query:`check_os_version` | Check the version of the underlaying OS.
    :query:`check_uptime` | Check time since last server re-boot.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)



Queries
=======
A quick reference for all available queries (check commands) in the CheckSystemUnix module.

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

.. include:: ../../samples/CheckSystemUnix_check_memory_samples.inc



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

    =============== =============================================================================== 
    Key             Value                                                                           
    --------------- ------------------------------------------------------------------------------- 
    kernel_name     Kernel name                                                                     
    kernel_release  Kernel release                                                                  
    kernel_version  Kernel version                                                                  
    machine         Machine hardware name                                                           
    nodename        Network node hostname                                                           
    os              Operating system                                                                
    processor       Processor type or unknown                                                       
    count           Number of items matching the filter                                             
    total            Total number of items                                                          
    ok_count         Number of items matched the ok criteria                                        
    warn_count       Number of items matched the warning criteria                                   
    crit_count       Number of items matched the critical criteria                                  
    problem_count    Number of items matched either warning or critical criteria                    
    list             A list of all items which matched the filter                                   
    ok_list          A list of all items which matched the ok criteria                              
    warn_list        A list of all items which matched the warning criteria                         
    crit_list        A list of all items which matched the critical criteria                        
    problem_list     A list of all items which matched either the critical or the warning criteria  
    detail_list      A special list with critical, then warning and fainally ok                     
    status           The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    =============== ===============================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options:

    =============== =============================================================================== 
    Key             Value                                                                           
    --------------- ------------------------------------------------------------------------------- 
    kernel_name     Kernel name                                                                     
    kernel_release  Kernel release                                                                  
    kernel_version  Kernel version                                                                  
    machine         Machine hardware name                                                           
    nodename        Network node hostname                                                           
    os              Operating system                                                                
    processor       Processor type or unknown                                                       
    count           Number of items matching the filter                                             
    total            Total number of items                                                          
    ok_count         Number of items matched the ok criteria                                        
    warn_count       Number of items matched the warning criteria                                   
    crit_count       Number of items matched the critical criteria                                  
    problem_count    Number of items matched either warning or critical criteria                    
    list             A list of all items which matched the filter                                   
    ok_list          A list of all items which matched the ok criteria                              
    warn_list        A list of all items which matched the warning criteria                         
    crit_list        A list of all items which matched the critical criteria                        
    problem_list     A list of all items which matched either the critical or the warning criteria  
    detail_list      A special list with critical, then warning and fainally ok                     
    status           The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    =============== ===============================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options:

    =============== =============================================================================== 
    Key             Value                                                                           
    --------------- ------------------------------------------------------------------------------- 
    kernel_name     Kernel name                                                                     
    kernel_release  Kernel release                                                                  
    kernel_version  Kernel version                                                                  
    machine         Machine hardware name                                                           
    nodename        Network node hostname                                                           
    os              Operating system                                                                
    processor       Processor type or unknown                                                       
    count           Number of items matching the filter                                             
    total            Total number of items                                                          
    ok_count         Number of items matched the ok criteria                                        
    warn_count       Number of items matched the warning criteria                                   
    crit_count       Number of items matched the critical criteria                                  
    problem_count    Number of items matched either warning or critical criteria                    
    list             A list of all items which matched the filter                                   
    ok_list          A list of all items which matched the ok criteria                              
    warn_list        A list of all items which matched the warning criteria                         
    crit_list        A list of all items which matched the critical criteria                        
    problem_list     A list of all items which matched either the critical or the warning criteria  
    detail_list      A special list with critical, then warning and fainally ok                     
    status           The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    =============== ===============================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options:

    =============== =============================================================================== 
    Key             Value                                                                           
    --------------- ------------------------------------------------------------------------------- 
    kernel_name     Kernel name                                                                     
    kernel_release  Kernel release                                                                  
    kernel_version  Kernel version                                                                  
    machine         Machine hardware name                                                           
    nodename        Network node hostname                                                           
    os              Operating system                                                                
    processor       Processor type or unknown                                                       
    count           Number of items matching the filter                                             
    total            Total number of items                                                          
    ok_count         Number of items matched the ok criteria                                        
    warn_count       Number of items matched the warning criteria                                   
    crit_count       Number of items matched the critical criteria                                  
    problem_count    Number of items matched either warning or critical criteria                    
    list             A list of all items which matched the filter                                   
    ok_list          A list of all items which matched the ok criteria                              
    warn_list        A list of all items which matched the warning criteria                         
    crit_list        A list of all items which matched the critical criteria                        
    problem_list     A list of all items which matched either the critical or the warning criteria  
    detail_list      A special list with critical, then warning and fainally ok                     
    status           The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    =============== ===============================================================================





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

    ================== =============================================================================== 
    Key                Value                                                                           
    ------------------ ------------------------------------------------------------------------------- 
    %(kernel_name)     Kernel name                                                                     
    %(kernel_release)  Kernel release                                                                  
    %(kernel_version)  Kernel version                                                                  
    %(machine)         Machine hardware name                                                           
    %(nodename)        Network node hostname                                                           
    %(os)              Operating system                                                                
    %(processor)       Processor type or unknown                                                       
    ${count}           Number of items matching the filter                                             
    ${total}            Total number of items                                                          
    ${ok_count}         Number of items matched the ok criteria                                        
    ${warn_count}       Number of items matched the warning criteria                                   
    ${crit_count}       Number of items matched the critical criteria                                  
    ${problem_count}    Number of items matched either warning or critical criteria                    
    ${list}             A list of all items which matched the filter                                   
    ${ok_list}          A list of all items which matched the ok criteria                              
    ${warn_list}        A list of all items which matched the warning criteria                         
    ${crit_list}        A list of all items which matched the critical criteria                        
    ${problem_list}     A list of all items which matched either the critical or the warning criteria  
    ${detail_list}      A special list with critical, then warning and fainally ok                     
    ${status}           The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================== ===============================================================================





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

    ================== =============================================================================== 
    Key                Value                                                                           
    ------------------ ------------------------------------------------------------------------------- 
    %(kernel_name)     Kernel name                                                                     
    %(kernel_release)  Kernel release                                                                  
    %(kernel_version)  Kernel version                                                                  
    %(machine)         Machine hardware name                                                           
    %(nodename)        Network node hostname                                                           
    %(os)              Operating system                                                                
    %(processor)       Processor type or unknown                                                       
    ${count}           Number of items matching the filter                                             
    ${total}            Total number of items                                                          
    ${ok_count}         Number of items matched the ok criteria                                        
    ${warn_count}       Number of items matched the warning criteria                                   
    ${crit_count}       Number of items matched the critical criteria                                  
    ${problem_count}    Number of items matched either warning or critical criteria                    
    ${list}             A list of all items which matched the filter                                   
    ${ok_list}          A list of all items which matched the ok criteria                              
    ${warn_list}        A list of all items which matched the warning criteria                         
    ${crit_list}        A list of all items which matched the critical criteria                        
    ${problem_list}     A list of all items which matched either the critical or the warning criteria  
    ${detail_list}      A special list with critical, then warning and fainally ok                     
    ${status}           The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================== ===============================================================================





.. option:: detail-syntax
    :synopsis: Detail level syntax.

    | Detail level syntax.
    | This is the syntax of each item in the list of top-syntax (see above).
    | Possible values are:

    ================== =============================================================================== 
    Key                Value                                                                           
    ------------------ ------------------------------------------------------------------------------- 
    %(kernel_name)     Kernel name                                                                     
    %(kernel_release)  Kernel release                                                                  
    %(kernel_version)  Kernel version                                                                  
    %(machine)         Machine hardware name                                                           
    %(nodename)        Network node hostname                                                           
    %(os)              Operating system                                                                
    %(processor)       Processor type or unknown                                                       
    ${count}           Number of items matching the filter                                             
    ${total}            Total number of items                                                          
    ${ok_count}         Number of items matched the ok criteria                                        
    ${warn_count}       Number of items matched the warning criteria                                   
    ${crit_count}       Number of items matched the critical criteria                                  
    ${problem_count}    Number of items matched either warning or critical criteria                    
    ${list}             A list of all items which matched the filter                                   
    ${ok_list}          A list of all items which matched the ok criteria                              
    ${warn_list}        A list of all items which matched the warning criteria                         
    ${crit_list}        A list of all items which matched the critical criteria                        
    ${problem_list}     A list of all items which matched either the critical or the warning criteria  
    ${detail_list}      A special list with critical, then warning and fainally ok                     
    ${status}           The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================== ===============================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================== =============================================================================== 
    Key                Value                                                                           
    ------------------ ------------------------------------------------------------------------------- 
    %(kernel_name)     Kernel name                                                                     
    %(kernel_release)  Kernel release                                                                  
    %(kernel_version)  Kernel version                                                                  
    %(machine)         Machine hardware name                                                           
    %(nodename)        Network node hostname                                                           
    %(os)              Operating system                                                                
    %(processor)       Processor type or unknown                                                       
    ${count}           Number of items matching the filter                                             
    ${total}            Total number of items                                                          
    ${ok_count}         Number of items matched the ok criteria                                        
    ${warn_count}       Number of items matched the warning criteria                                   
    ${crit_count}       Number of items matched the critical criteria                                  
    ${problem_count}    Number of items matched either warning or critical criteria                    
    ${list}             A list of all items which matched the filter                                   
    ${ok_list}          A list of all items which matched the ok criteria                              
    ${warn_list}        A list of all items which matched the warning criteria                         
    ${crit_list}        A list of all items which matched the critical criteria                        
    ${problem_list}     A list of all items which matched either the critical or the warning criteria  
    ${detail_list}      A special list with critical, then warning and fainally ok                     
    ${status}           The returned status (OK/WARN/CRIT/UNKNOWN)                                     
    ================== ===============================================================================





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







