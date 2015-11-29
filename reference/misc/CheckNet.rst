.. default-domain:: nscp

.. module:: CheckNet
    :synopsis: Network related check such as check_ping.

===============================
:module:`CheckNet` --- CheckNet
===============================
Network related check such as check_ping.

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_ping` | Ping another host and check the result.




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)



Queries
=======
A quick reference for all available queries (check commands) in the CheckNet module.

:query:`check_ping`
-------------------
.. query:: check_ping
    :synopsis: Ping another host and check the result.

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
    :option:`warning` | time > 60 or loss > 5% | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | time > 100 or loss > 10% | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`top-syntax` | ${status}: ${problem_count}/${count} (${problem_list}) | Top level syntax.
    :option:`ok-syntax` | %(status): All %(count) hosts are ok | ok syntax.
    :option:`empty-syntax` | No hosts found | Empty syntax.
    :option:`detail-syntax` | ${ip} Packet loss = ${loss}%, RTA = ${time}ms | Detail level syntax.
    :option:`perf-syntax` | ${host} | Performance alias syntax.
    :option:`host` |  | The host to check (or multiple hosts).
    :option:`total` | N/A | Include the total of all matching hosts
    :option:`hosts` |  | The host to check (or multiple hosts).
    :option:`count` | 1 | Number of packets to send.
    :option:`timeout` | 500 | Timeout in milliseconds.




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
    host           The host name or ip address (as given on command line)                          
    ip             The ip address name                                                             
    loss           Packet loss                                                                     
    recv           Number of packets received from the host                                        
    sent           Number of packets sent to the host                                              
    time           Round trip time in ms                                                           
    timeout        Number of packets which timed out from the host                                 
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
    host           The host name or ip address (as given on command line)                          
    ip             The ip address name                                                             
    loss           Packet loss                                                                     
    recv           Number of packets received from the host                                        
    sent           Number of packets sent to the host                                              
    time           Round trip time in ms                                                           
    timeout        Number of packets which timed out from the host                                 
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
    host           The host name or ip address (as given on command line)                          
    ip             The ip address name                                                             
    loss           Packet loss                                                                     
    recv           Number of packets received from the host                                        
    sent           Number of packets sent to the host                                              
    time           Round trip time in ms                                                           
    timeout        Number of packets which timed out from the host                                 
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
    host           The host name or ip address (as given on command line)                          
    ip             The ip address name                                                             
    loss           Packet loss                                                                     
    recv           Number of packets received from the host                                        
    sent           Number of packets sent to the host                                              
    time           Round trip time in ms                                                           
    timeout        Number of packets which timed out from the host                                 
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

.. option:: escape-html
    :synopsis: Escape any < and > characters to prevent HTML encoding

    | Escape any < and > characters to prevent HTML encoding

.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include strings as well as special keywords such as:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(host)           The host name or ip address (as given on command line)                          
    %(ip)             The ip address name                                                             
    %(loss)           Packet loss                                                                     
    %(recv)           Number of packets received from the host                                        
    %(sent)           Number of packets sent to the host                                              
    %(time)           Round trip time in ms                                                           
    %(timeout)        Number of packets which timed out from the host                                 
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
    %(host)           The host name or ip address (as given on command line)                          
    %(ip)             The ip address name                                                             
    %(loss)           Packet loss                                                                     
    %(recv)           Number of packets received from the host                                        
    %(sent)           Number of packets sent to the host                                              
    %(time)           Round trip time in ms                                                           
    %(timeout)        Number of packets which timed out from the host                                 
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
    %(host)           The host name or ip address (as given on command line)                          
    %(ip)             The ip address name                                                             
    %(loss)           Packet loss                                                                     
    %(recv)           Number of packets received from the host                                        
    %(sent)           Number of packets sent to the host                                              
    %(time)           Round trip time in ms                                                           
    %(timeout)        Number of packets which timed out from the host                                 
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
    %(host)           The host name or ip address (as given on command line)                          
    %(ip)             The ip address name                                                             
    %(loss)           Packet loss                                                                     
    %(recv)           Number of packets received from the host                                        
    %(sent)           Number of packets sent to the host                                              
    %(time)           Round trip time in ms                                                           
    %(timeout)        Number of packets which timed out from the host                                 
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





.. option:: host
    :synopsis: The host to check (or multiple hosts).

    | The host to check (or multiple hosts).

.. option:: total
    :synopsis: Include the total of all matching hosts

    | Include the total of all matching hosts

.. option:: hosts
    :synopsis: The host to check (or multiple hosts).

    | The host to check (or multiple hosts).

.. option:: count
    :synopsis: Number of packets to send.

    | Number of packets to send.

.. option:: timeout
    :synopsis: Timeout in milliseconds.

    | Timeout in milliseconds.



