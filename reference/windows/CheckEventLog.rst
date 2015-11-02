.. default-domain:: nscp

.. module:: CheckEventLog
    :synopsis: Check for errors and warnings in the event log.

=========================================
:module:`CheckEventLog` --- CheckEventLog
=========================================
Check for errors and warnings in the event log.

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_eventlog` | Check for errors in the event log.
    :query:`checkeventlog` | Legacy version of check_eventlog




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/eventlog` | :confkey:`~/settings/eventlog.buffer size` | BUFFER_SIZE
    :confpath:`/settings/eventlog` | :confkey:`~/settings/eventlog.debug` | DEBUG
    :confpath:`/settings/eventlog` | :confkey:`~/settings/eventlog.lookup names` | LOOKUP NAMES
    :confpath:`/settings/eventlog` | :confkey:`~/settings/eventlog.syntax` | SYNTAX
    :confpath:`/settings/eventlog/real-time` | :confkey:`~/settings/eventlog/real-time.debug` | DEBUG
    :confpath:`/settings/eventlog/real-time` | :confkey:`~/settings/eventlog/real-time.enabled` | REAL TIME CHECKING
    :confpath:`/settings/eventlog/real-time` | :confkey:`~/settings/eventlog/real-time.log` | LOGS TO CHECK
    :confpath:`/settings/eventlog/real-time` | :confkey:`~/settings/eventlog/real-time.startup age` | STARTUP AGE
    :confpath:`/settings/eventlog/real-time/filters` | :confkey:`~/settings/eventlog/real-time/filters.default` | default


Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.alias` | ALIAS
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.command` | COMMAND NAME
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.critical` | CRITICAL FILTER
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.debug` | DEBUG
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.destination` | DESTINATION
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.detail syntax` | SYNTAX
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.empty message` | EMPTY MESSAGE
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.filter` | FILTER
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.is template` | IS TEMPLATE
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.log` | FILE
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.logs` | FILES
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.maximum age` | MAGIMUM AGE
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.ok` | OK FILTER
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.ok syntax` | SYNTAX
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.parent` | PARENT
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.perf config` | PERF CONFIG
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.severity` | SEVERITY
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.target` | DESTINATION
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.top syntax` | SYNTAX
    :confpath:`/settings/eventlog/real-time/filters/sample` | :confkey:`~/settings/eventlog/real-time/filters/sample.warning` | WARNING FILTER


Queries
=======
A quick reference for all available queries (check commands) in the CheckEventLog module.

:query:`check_eventlog`
-----------------------
.. query:: check_eventlog
    :synopsis: Check for errors in the event log.

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
    :option:`filter` | level in ('error', 'warning') | Filter which marks interesting items.
    :option:`warning` | count > 0 | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | count > 5 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`empty-state` | ok | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`unique-index` |  | Unique syntax.
    :option:`top-syntax` | ${status}: ${problem_count}/${count} ${problem_list} | Top level syntax.
    :option:`ok-syntax` | %(status): Event log seems fine | ok syntax.
    :option:`empty-syntax` | %(status): No entries found | Empty syntax.
    :option:`detail-syntax` | ${file} ${source} (${message}) | Detail level syntax.
    :option:`perf-syntax` | ${file}_${source} | Performance alias syntax.
    :option:`file` |  | File to read (can be specified multiple times to check multiple files.
    :option:`scan-range` |  | Date range to scan.
    :option:`truncate-message` |  | Maximum length of message for each event log message text.
    :option:`unique` | 1 | Shorthand for setting default unique index: ${log}-${source}-${id}.




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
    category       TODO                                                                            
    computer       Which computer generated the message                                            
    customer       TODO                                                                            
    file           The logfile name                                                                
    id             Eventlog id                                                                     
    level          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    log            alias for file                                                                  
    message        The message rendered as a string.                                               
    rawid          Raw message id (contains many other fields all baked into a single number)      
    source         Source system.                                                                  
    type           alias for level (old, deprecated)                                               
    written        When the message was written to file                                            
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
    category       TODO                                                                            
    computer       Which computer generated the message                                            
    customer       TODO                                                                            
    file           The logfile name                                                                
    id             Eventlog id                                                                     
    level          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    log            alias for file                                                                  
    message        The message rendered as a string.                                               
    rawid          Raw message id (contains many other fields all baked into a single number)      
    source         Source system.                                                                  
    type           alias for level (old, deprecated)                                               
    written        When the message was written to file                                            
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
    category       TODO                                                                            
    computer       Which computer generated the message                                            
    customer       TODO                                                                            
    file           The logfile name                                                                
    id             Eventlog id                                                                     
    level          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    log            alias for file                                                                  
    message        The message rendered as a string.                                               
    rawid          Raw message id (contains many other fields all baked into a single number)      
    source         Source system.                                                                  
    type           alias for level (old, deprecated)                                               
    written        When the message was written to file                                            
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
    category       TODO                                                                            
    computer       Which computer generated the message                                            
    customer       TODO                                                                            
    file           The logfile name                                                                
    id             Eventlog id                                                                     
    level          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    log            alias for file                                                                  
    message        The message rendered as a string.                                               
    rawid          Raw message id (contains many other fields all baked into a single number)      
    source         Source system.                                                                  
    type           alias for level (old, deprecated)                                               
    written        When the message was written to file                                            
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

.. option:: unique-index
    :synopsis: Unique syntax.

    | Unique syntax.
    | Used to filter unique items (counted will still increase but messages will not repeaters:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(category)       TODO                                                                            
    %(computer)       Which computer generated the message                                            
    %(customer)       TODO                                                                            
    %(file)           The logfile name                                                                
    %(id)             Eventlog id                                                                     
    %(level)          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    %(log)            alias for file                                                                  
    %(message)        The message rendered as a string.                                               
    %(rawid)          Raw message id (contains many other fields all baked into a single number)      
    %(source)         Source system.                                                                  
    %(type)           alias for level (old, deprecated)                                               
    %(written)        When the message was written to file                                            
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





.. option:: top-syntax
    :synopsis: Top level syntax.

    | Top level syntax.
    | Used to format the message to return can include strings as well as special keywords such as:

    ================= =============================================================================== 
    Key               Value                                                                           
    ----------------- ------------------------------------------------------------------------------- 
    %(category)       TODO                                                                            
    %(computer)       Which computer generated the message                                            
    %(customer)       TODO                                                                            
    %(file)           The logfile name                                                                
    %(id)             Eventlog id                                                                     
    %(level)          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    %(log)            alias for file                                                                  
    %(message)        The message rendered as a string.                                               
    %(rawid)          Raw message id (contains many other fields all baked into a single number)      
    %(source)         Source system.                                                                  
    %(type)           alias for level (old, deprecated)                                               
    %(written)        When the message was written to file                                            
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
    %(category)       TODO                                                                            
    %(computer)       Which computer generated the message                                            
    %(customer)       TODO                                                                            
    %(file)           The logfile name                                                                
    %(id)             Eventlog id                                                                     
    %(level)          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    %(log)            alias for file                                                                  
    %(message)        The message rendered as a string.                                               
    %(rawid)          Raw message id (contains many other fields all baked into a single number)      
    %(source)         Source system.                                                                  
    %(type)           alias for level (old, deprecated)                                               
    %(written)        When the message was written to file                                            
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
    %(category)       TODO                                                                            
    %(computer)       Which computer generated the message                                            
    %(customer)       TODO                                                                            
    %(file)           The logfile name                                                                
    %(id)             Eventlog id                                                                     
    %(level)          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    %(log)            alias for file                                                                  
    %(message)        The message rendered as a string.                                               
    %(rawid)          Raw message id (contains many other fields all baked into a single number)      
    %(source)         Source system.                                                                  
    %(type)           alias for level (old, deprecated)                                               
    %(written)        When the message was written to file                                            
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
    %(category)       TODO                                                                            
    %(computer)       Which computer generated the message                                            
    %(customer)       TODO                                                                            
    %(file)           The logfile name                                                                
    %(id)             Eventlog id                                                                     
    %(level)          Severity level (error, warning, info, success, auditSucess, auditFailure)       
    %(log)            alias for file                                                                  
    %(message)        The message rendered as a string.                                               
    %(rawid)          Raw message id (contains many other fields all baked into a single number)      
    %(source)         Source system.                                                                  
    %(type)           alias for level (old, deprecated)                                               
    %(written)        When the message was written to file                                            
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





.. option:: file
    :synopsis: File to read (can be specified multiple times to check multiple files.

    | File to read (can be specified multiple times to check multiple files.
    | Notice that specifying multiple files will create an aggregate set you will not check each file individually.In other words if one file contains an error the entire check will result in error.

.. option:: scan-range
    :synopsis: Date range to scan.

    | Date range to scan.
    | This is the approximate dates to search through this speeds up searching a lot but there is no guarantee messages are ordered.

.. option:: truncate-message
    :synopsis: Maximum length of message for each event log message text.

    | Maximum length of message for each event log message text.

.. option:: unique
    :synopsis: Shorthand for setting default unique index: ${log}-${source}-${id}.

    | Shorthand for setting default unique index: ${log}-${source}-${id}.

:query:`checkeventlog`
----------------------
.. query:: checkeventlog
    :synopsis: Legacy version of check_eventlog

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`MaxWarn` |  | Maximum value before a warning is returned.
    :option:`MaxCrit` |  | Maximum value before a critical is returned.
    :option:`MinWarn` |  | Minimum value before a warning is returned.
    :option:`MinCrit` |  | Minimum value before a critical is returned.
    :option:`warn` |  | Maximum value before a warning is returned.
    :option:`crit` |  | Maximum value before a critical is returned.
    :option:`filter` |  | The filter to use.
    :option:`file` |  | The file to check
    :option:`debug` | 1 | The file to check
    :option:`truncate` |  | Deprecated and has no meaning
    :option:`descriptions` | 1 | Deprecated and has no meaning
    :option:`unique` | 1 | 
    :option:`syntax` | %source%, %strings% | The syntax string
    :option:`top-syntax` | ${list} | The top level syntax string
    :option:`scan-range` |  | TODO




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

.. option:: filter
    :synopsis: The filter to use.

    | The filter to use.

.. option:: file
    :synopsis: The file to check

    | The file to check

.. option:: debug
    :synopsis: The file to check

    | The file to check

.. option:: truncate
    :synopsis: Deprecated and has no meaning

    | Deprecated and has no meaning

.. option:: descriptions
    :synopsis: Deprecated and has no meaning

    | Deprecated and has no meaning

.. option:: unique
    :synopsis: 



.. option:: syntax
    :synopsis: The syntax string

    | The syntax string

.. option:: top-syntax
    :synopsis: The top level syntax string

    | The top level syntax string

.. option:: scan-range
    :synopsis: TODO

    | TODO





/ settings/ eventlog
--------------------

.. confpath:: /settings/eventlog
    :synopsis: EVENT LOG SECTION

**EVENT LOG SECTION**

    | Section for the EventLog Checker (CheckEventLog.dll).


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`buffer size` | 131072 | BUFFER_SIZE
        :confkey:`debug` | 0 | DEBUG
        :confkey:`lookup names` | 1 | LOOKUP NAMES
        :confkey:`syntax` |  | SYNTAX

    **Sample**::

        # EVENT LOG SECTION
        # Section for the EventLog Checker (CheckEventLog.dll).
        [/settings/eventlog]
        buffer size=131072
        debug=0
        lookup names=1
        syntax=


    .. confkey:: buffer size
        :synopsis: BUFFER_SIZE

        **BUFFER_SIZE**

        | The size of the buffer to use when getting messages this affects the speed and maximum size of messages you can recieve.

        **Path**: /settings/eventlog

        **Key**: buffer size

        **Default value**: 131072

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog]
            # BUFFER_SIZE
            buffer size=131072


    .. confkey:: debug
        :synopsis: DEBUG

        **DEBUG**

        | Log more information when filtering (useful to detect issues with filters) not useful in production as it is a bit of a resource hog.

        **Path**: /settings/eventlog

        **Key**: debug

        **Default value**: 0

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog]
            # DEBUG
            debug=0


    .. confkey:: lookup names
        :synopsis: LOOKUP NAMES

        **LOOKUP NAMES**

        | Lookup the names of eventlog files

        **Path**: /settings/eventlog

        **Key**: lookup names

        **Default value**: 1

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog]
            # LOOKUP NAMES
            lookup names=1


    .. confkey:: syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Set this to use a specific syntax string for all commands (that don't specify one).

        **Path**: /settings/eventlog

        **Key**: syntax

        **Default value**: 

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog]
            # SYNTAX
            syntax=




…  / real-time
--------------

.. confpath:: /settings/eventlog/real-time
    :synopsis: CONFIGURE REALTIME CHECKING

**CONFIGURE REALTIME CHECKING**

    | A set of options to configure the real time checks


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`debug` | 0 | DEBUG
        :confkey:`enabled` | 0 | REAL TIME CHECKING
        :confkey:`log` | application,system | LOGS TO CHECK
        :confkey:`startup age` | 30m | STARTUP AGE

    **Sample**::

        # CONFIGURE REALTIME CHECKING
        # A set of options to configure the real time checks
        [/settings/eventlog/real-time]
        debug=0
        enabled=0
        log=application,system
        startup age=30m


    .. confkey:: debug
        :synopsis: DEBUG

        **DEBUG**

        | Log missed records (useful to detect issues with filters) not useful in production as it is a bit of a resource hog.

        **Path**: /settings/eventlog/real-time

        **Key**: debug

        **Default value**: 0

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time]
            # DEBUG
            debug=0


    .. confkey:: enabled
        :synopsis: REAL TIME CHECKING

        **REAL TIME CHECKING**

        | Spawns a background thread which detects issues and reports them back instantly.

        **Path**: /settings/eventlog/real-time

        **Key**: enabled

        **Default value**: 0

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time]
            # REAL TIME CHECKING
            enabled=0


    .. confkey:: log
        :synopsis: LOGS TO CHECK

        **LOGS TO CHECK**

        | Comma separated list of logs to check

        **Path**: /settings/eventlog/real-time

        **Key**: log

        **Default value**: application,system

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time]
            # LOGS TO CHECK
            log=application,system


    .. confkey:: startup age
        :synopsis: STARTUP AGE

        **STARTUP AGE**

        | The initial age to scan when starting NSClient++

        **Path**: /settings/eventlog/real-time

        **Key**: startup age

        **Default value**: 30m

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time]
            # STARTUP AGE
            startup age=30m




…  / real-time / filters
------------------------

.. confpath:: /settings/eventlog/real-time/filters
    :synopsis: REALTIME FILTERS

**REALTIME FILTERS**

    | A set of filters to use in real-time mode


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`default` |  | default

    **Sample**::

        # REALTIME FILTERS
        # A set of filters to use in real-time mode
        [/settings/eventlog/real-time/filters]
        default=


    .. confkey:: default
        :synopsis: default

        **default**

        | Filter for default. To configure this item add a section called: /settings/eventlog/real-time/filters/default

        **Path**: /settings/eventlog/real-time/filters

        **Key**: default

        **Default value**: 

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters]
            # default
            default=




…  / real-time / filters / sample
---------------------------------

.. confpath:: /settings/eventlog/real-time/filters/sample
    :synopsis: REAL TIME FILTER DEFENITION

**REAL TIME FILTER DEFENITION**

    | Definition for real time filter: sample


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`alias` |  | ALIAS
        :confkey:`command` |  | COMMAND NAME
        :confkey:`critical` |  | CRITICAL FILTER
        :confkey:`debug` | 0 | DEBUG
        :confkey:`destination` |  | DESTINATION
        :confkey:`detail syntax` |  | SYNTAX
        :confkey:`empty message` | eventlog found no records | EMPTY MESSAGE
        :confkey:`filter` |  | FILTER
        :confkey:`is template` | 0 | IS TEMPLATE
        :confkey:`log` |  | FILE
        :confkey:`logs` |  | FILES
        :confkey:`maximum age` | 5m | MAGIMUM AGE
        :confkey:`ok` |  | OK FILTER
        :confkey:`ok syntax` |  | SYNTAX
        :confkey:`parent` | default | PARENT
        :confkey:`perf config` |  | PERF CONFIG
        :confkey:`severity` |  | SEVERITY
        :confkey:`target` |  | DESTINATION
        :confkey:`top syntax` |  | SYNTAX
        :confkey:`warning` |  | WARNING FILTER

    **Sample**::

        # REAL TIME FILTER DEFENITION
        # Definition for real time filter: sample
        [/settings/eventlog/real-time/filters/sample]
        alias=
        command=
        critical=
        debug=0
        destination=
        detail syntax=
        empty message=eventlog found no records
        filter=
        is template=0
        log=
        logs=
        maximum age=5m
        ok=
        ok syntax=
        parent=default
        perf config=
        severity=
        target=
        top syntax=
        warning=


    .. confkey:: alias
        :synopsis: ALIAS

        **ALIAS**

        | The alias (service name) to report to server

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: alias

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # ALIAS
            alias=


    .. confkey:: command
        :synopsis: COMMAND NAME

        **COMMAND NAME**

        | The name of the command (think nagios service name) to report up stream (defaults to alias if not set)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: command

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # COMMAND NAME
            command=


    .. confkey:: critical
        :synopsis: CRITICAL FILTER

        **CRITICAL FILTER**

        | If any rows match this filter severity will escalated to CRITICAL

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: critical

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # CRITICAL FILTER
            critical=


    .. confkey:: debug
        :synopsis: DEBUG

        **DEBUG**

        | Enable this to display debug information for this match filter

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: debug

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # DEBUG
            debug=0


    .. confkey:: destination
        :synopsis: DESTINATION

        **DESTINATION**

        | The destination for intercepted messages

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: destination

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # DESTINATION
            destination=


    .. confkey:: detail syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: detail syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # SYNTAX
            detail syntax=


    .. confkey:: empty message
        :synopsis: EMPTY MESSAGE

        **EMPTY MESSAGE**

        | The message to display if nothing matches the filter (generally considered the ok state).

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: empty message

        **Default value**: eventlog found no records

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # EMPTY MESSAGE
            empty message=eventlog found no records


    .. confkey:: filter
        :synopsis: FILTER

        **FILTER**

        | Scan files for matching rows for each matching rows an OK message will be submitted

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: filter

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # FILTER
            filter=


    .. confkey:: is template
        :synopsis: IS TEMPLATE

        **IS TEMPLATE**

        | Declare this object as a template (this means it will not be available as a separate object)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: is template

        **Default value**: 0

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # IS TEMPLATE
            is template=0


    .. confkey:: log
        :synopsis: FILE

        **FILE**

        | The eventlog record to filter on (if set to 'all' means all enabled logs)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: log

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # FILE
            log=


    .. confkey:: logs
        :synopsis: FILES

        **FILES**

        | The eventlog record to filter on (if set to 'all' means all enabled logs)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: logs

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # FILES
            logs=


    .. confkey:: maximum age
        :synopsis: MAGIMUM AGE

        **MAGIMUM AGE**

        | How long before reporting "ok".
        | If this is set to "false" no periodic ok messages will be reported only errors.

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: maximum age

        **Default value**: 5m

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # MAGIMUM AGE
            maximum age=5m


    .. confkey:: ok
        :synopsis: OK FILTER

        **OK FILTER**

        | If any rows match this filter severity will escalated down to OK

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: ok

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # OK FILTER
            ok=


    .. confkey:: ok syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: ok syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # SYNTAX
            ok syntax=


    .. confkey:: parent
        :synopsis: PARENT

        **PARENT**

        | The parent the target inherits from

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: parent

        **Default value**: default

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # PARENT
            parent=default


    .. confkey:: perf config
        :synopsis: PERF CONFIG

        **PERF CONFIG**

        | Performance data configuration

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: perf config

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # PERF CONFIG
            perf config=


    .. confkey:: severity
        :synopsis: SEVERITY

        **SEVERITY**

        | THe severity of this message (OK, WARNING, CRITICAL, UNKNOWN)

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: severity

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # SEVERITY
            severity=


    .. confkey:: target
        :synopsis: DESTINATION

        **DESTINATION**

        | Same as destination

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: target

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # DESTINATION
            target=


    .. confkey:: top syntax
        :synopsis: SYNTAX

        **SYNTAX**

        | Format string for dates

        **Advanced** (means it is not commonly used)

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: top syntax

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # SYNTAX
            top syntax=


    .. confkey:: warning
        :synopsis: WARNING FILTER

        **WARNING FILTER**

        | If any rows match this filter severity will escalated to WARNING

        **Path**: /settings/eventlog/real-time/filters/sample

        **Key**: warning

        **Default value**: 

        **Sample key**: This key is provided as a sample to show how to configure objects

        **Used by**: :module:`CheckEventLog`

        **Sample**::

            [/settings/eventlog/real-time/filters/sample]
            # WARNING FILTER
            warning=


