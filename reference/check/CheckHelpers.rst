.. default-domain:: nscp

.. module:: CheckHelpers
    :synopsis: Various helper function to extend other checks.

=======================================
:module:`CheckHelpers` --- CheckHelpers
=======================================
Various helper function to extend other checks.

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_always_critical` | Run another check and regardless of its return code return CRITICAL.
    :query:`check_always_ok` | Run another check and regardless of its return code return OK.
    :query:`check_always_warning` | Run another check and regardless of its return code return WARNING.
    :query:`check_and_forward` | Run a check and forward the result as a passive check.
    :query:`check_critical` | Just return CRITICAL (anything passed along will be used as a message).
    :query:`check_multi` | Run more then one check and return the worst state.
    :query:`check_negate` | Run a check and alter the return status codes according to arguments.
    :query:`check_ok` | Just return OK (anything passed along will be used as a message).
    :query:`check_timeout` | Run a check and timeout after a given amount of time if the check has not returned.
    :query:`check_version` | Just return the NSClient++ version.
    :query:`check_warning` | Just return WARNING (anything passed along will be used as a message).
    :query:`filter_perf` | Run a check and filter performance data.
    :query:`render_perf` | Run a check and render the performance data as output message.
    :query:`xform_perf` | Run a check and transform the performance data in various (currently one) way.


**Aliases (Overview)**:

A list of all short hand aliases for queries (check commands)



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    checkalwayscritical | Alias for: :query:`check_always_critical`
    checkalwaysok | Alias for: :query:`check_always_ok`
    checkalwayswarning | Alias for: :query:`check_always_warning`
    checkcritical | Alias for: :query:`check_critical`
    checkmultiple | Alias for: :query:`check_multi`
    checkok | Alias for: :query:`check_ok`
    checkversion | Alias for: :query:`check_version`
    checkwarning | Alias for: :query:`check_warning`
    negate | Alias for: :query:`check_negate`
    timeout | Alias for: :query:`check_timeout`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)




Queries
=======
A quick reference for all available queries (check commands) in the CheckHelpers module.

:query:`check_always_critical`
------------------------------
.. query:: check_always_critical
    :synopsis: Run another check and regardless of its return code return CRITICAL.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).




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

:query:`check_always_ok`
------------------------
.. query:: check_always_ok
    :synopsis: Run another check and regardless of its return code return OK.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).




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

:query:`check_always_warning`
-----------------------------
.. query:: check_always_warning
    :synopsis: Run another check and regardless of its return code return WARNING.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).




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

:query:`check_and_forward`
--------------------------
.. query:: check_and_forward
    :synopsis: Run a check and forward the result as a passive check.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`target` |  | Commands to run (can be used multiple times)
    :option:`command` |  | Commands to run (can be used multiple times)
    :option:`arguments` |  | List of arguments (for wrapped command)




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

.. option:: target
    :synopsis: Commands to run (can be used multiple times)

    | Commands to run (can be used multiple times)

.. option:: command
    :synopsis: Commands to run (can be used multiple times)

    | Commands to run (can be used multiple times)

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)

:query:`check_critical`
-----------------------
.. query:: check_critical
    :synopsis: Just return CRITICAL (anything passed along will be used as a message).

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`message` | No message | Message to return




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

.. option:: message
    :synopsis: Message to return

    | Message to return

:query:`check_multi`
--------------------
.. query:: check_multi
    :synopsis: Run more then one check and return the worst state.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`command` |  | Commands to run (can be used multiple times)
    :option:`arguments` |  | Deprecated alias for command
    :option:`separator` | ,  | Separator between messages
    :option:`prefix` |  | Message prefix
    :option:`suffix` |  | Message suffix




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

.. option:: command
    :synopsis: Commands to run (can be used multiple times)

    | Commands to run (can be used multiple times)

.. option:: arguments
    :synopsis: Deprecated alias for command

    | Deprecated alias for command

.. option:: separator
    :synopsis: Separator between messages

    | Separator between messages

.. option:: prefix
    :synopsis: Message prefix

    | Message prefix

.. option:: suffix
    :synopsis: Message suffix

    | Message suffix

:query:`check_negate`
---------------------
.. query:: check_negate
    :synopsis: Run a check and alter the return status codes according to arguments.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`ok` |  | The state to return instead of OK
    :option:`warning` |  | The state to return instead of WARNING
    :option:`critical` |  | The state to return instead of CRITICAL
    :option:`unknown` |  | The state to return instead of UNKNOWN
    :option:`command` |  | Wrapped command to execute
    :option:`arguments` |  | List of arguments (for wrapped command)




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

.. option:: ok
    :synopsis: The state to return instead of OK

    | The state to return instead of OK

.. option:: warning
    :synopsis: The state to return instead of WARNING

    | The state to return instead of WARNING

.. option:: critical
    :synopsis: The state to return instead of CRITICAL

    | The state to return instead of CRITICAL

.. option:: unknown
    :synopsis: The state to return instead of UNKNOWN

    | The state to return instead of UNKNOWN

.. option:: command
    :synopsis: Wrapped command to execute

    | Wrapped command to execute

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)

:query:`check_ok`
-----------------
.. query:: check_ok
    :synopsis: Just return OK (anything passed along will be used as a message).

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`message` | No message | Message to return




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

.. option:: message
    :synopsis: Message to return

    | Message to return

:query:`check_timeout`
----------------------
.. query:: check_timeout
    :synopsis: Run a check and timeout after a given amount of time if the check has not returned.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`timeout` |  | The timeout value
    :option:`command` |  | Wrapped command to execute
    :option:`arguments` |  | List of arguments (for wrapped command)
    :option:`return` |  | The return status




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

.. option:: timeout
    :synopsis: The timeout value

    | The timeout value

.. option:: command
    :synopsis: Wrapped command to execute

    | Wrapped command to execute

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)

.. option:: return
    :synopsis: The return status

    | The return status

:query:`check_version`
----------------------
.. query:: check_version
    :synopsis: Just return the NSClient++ version.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).




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

:query:`check_warning`
----------------------
.. query:: check_warning
    :synopsis: Just return WARNING (anything passed along will be used as a message).

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`message` | No message | Message to return




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

.. option:: message
    :synopsis: Message to return

    | Message to return

:query:`filter_perf`
--------------------
.. query:: filter_perf
    :synopsis: Run a check and filter performance data.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`sort` | none | The sort order to use: none, normal or reversed
    :option:`limit` | 0 | The maximum number of items to return (0 returns all items)
    :option:`command` |  | Wrapped command to execute
    :option:`arguments` |  | List of arguments (for wrapped command)




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

.. option:: sort
    :synopsis: The sort order to use: none, normal or reversed

    | The sort order to use: none, normal or reversed

.. option:: limit
    :synopsis: The maximum number of items to return (0 returns all items)

    | The maximum number of items to return (0 returns all items)

.. option:: command
    :synopsis: Wrapped command to execute

    | Wrapped command to execute

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)

:query:`render_perf`
--------------------
.. query:: render_perf
    :synopsis: Run a check and render the performance data as output message.

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
    :option:`top-syntax` | %(status): %(message) %(list) | Top level syntax.
    :option:`ok-syntax` |  | ok syntax.
    :option:`empty-syntax` |  | Empty syntax.
    :option:`detail-syntax` | %(key)	%(value)	%(unit)	%(warn)	%(crit)	%(min)	%(max)
 | Detail level syntax.
    :option:`perf-syntax` | %(key) | Performance alias syntax.
    :option:`command` |  | Wrapped command to execute
    :option:`arguments` |  | List of arguments (for wrapped command)
    :option:`remove-perf` | N/A | List of arguments (for wrapped command)




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
    crit           Major version number                                                                                           
    key            Major version number                                                                                           
    max            Major version number                                                                                           
    message        Major version number                                                                                           
    min            Major version number                                                                                           
    unit           Major version number                                                                                           
    value          Major version number                                                                                           
    warn           Major version number                                                                                           
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
    crit           Major version number                                                                                           
    key            Major version number                                                                                           
    max            Major version number                                                                                           
    message        Major version number                                                                                           
    min            Major version number                                                                                           
    unit           Major version number                                                                                           
    value          Major version number                                                                                           
    warn           Major version number                                                                                           
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
    crit           Major version number                                                                                           
    key            Major version number                                                                                           
    max            Major version number                                                                                           
    message        Major version number                                                                                           
    min            Major version number                                                                                           
    unit           Major version number                                                                                           
    value          Major version number                                                                                           
    warn           Major version number                                                                                           
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
    crit           Major version number                                                                                           
    key            Major version number                                                                                           
    max            Major version number                                                                                           
    message        Major version number                                                                                           
    min            Major version number                                                                                           
    unit           Major version number                                                                                           
    value          Major version number                                                                                           
    warn           Major version number                                                                                           
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
    crit     Major version number  
    key      Major version number  
    max      Major version number  
    message  Major version number  
    min      Major version number  
    unit     Major version number  
    value    Major version number  
    warn     Major version number  
    ======== =====================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ======== ===================== 
    Key      Value                 
    -------- --------------------- 
    crit     Major version number  
    key      Major version number  
    max      Major version number  
    message  Major version number  
    min      Major version number  
    unit     Major version number  
    value    Major version number  
    warn     Major version number  
    ======== =====================





.. option:: command
    :synopsis: Wrapped command to execute

    | Wrapped command to execute

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)

.. option:: remove-perf
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)

:query:`xform_perf`
-------------------
.. query:: xform_perf
    :synopsis: Run a check and transform the performance data in various (currently one) way.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`command` |  | Wrapped command to execute
    :option:`arguments` |  | List of arguments (for wrapped command)
    :option:`mode` |  | Transformation mode (currently only supports extract)
    :option:`field` |  | Field to work with (value, warn, crit, max, min)
    :option:`replace` |  | Replace expression for the alias




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

.. option:: command
    :synopsis: Wrapped command to execute

    | Wrapped command to execute

.. option:: arguments
    :synopsis: List of arguments (for wrapped command)

    | List of arguments (for wrapped command)

.. option:: mode
    :synopsis: Transformation mode (currently only supports extract)

    | Transformation mode (currently only supports extract)

.. option:: field
    :synopsis: Field to work with (value, warn, crit, max, min)

    | Field to work with (value, warn, crit, max, min)

.. option:: replace
    :synopsis: Replace expression for the alias

    | Replace expression for the alias



