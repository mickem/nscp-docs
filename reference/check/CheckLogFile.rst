.. default-domain:: nscp

.. module:: CheckLogFile
    :synopsis: File for checking log files and various other forms of updating text files

=======================================
:module:`CheckLogFile` --- CheckLogFile
=======================================
File for checking log files and various other forms of updating text files

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_logfile` | Check for errors in log file or generic pattern matching in text files.


**Aliases (Overview)**:

A list of all short hand aliases for queries (check commands)



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    checklogfile | Alias for: :query:`check_logfile`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/logfile/real-time` | :confkey:`~/settings/logfile/real-time.enabled` | REAL TIME CHECKING





Queries
=======
A quick reference for all available queries (check commands) in the CheckLogFile module.

:query:`check_logfile`
----------------------
.. query:: check_logfile
    :synopsis: Check for errors in log file or generic pattern matching in text files.

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
    :option:`empty-state` | ignored | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`top-syntax` | ${count}/${total} (${problem_list}) | Top level syntax.
    :option:`ok-syntax` |  | ok syntax.
    :option:`empty-syntax` | %(status): Nothing found | Empty syntax.
    :option:`detail-syntax` | ${column1} | Detail level syntax.
    :option:`perf-syntax` | ${column1} | Performance alias syntax.
    :option:`line-split` | \n | Character string used to split a file into several lines (default \n)
    :option:`column-split` | \t | Character string to split a line into several columns (default \t)
    :option:`split` |  | Alias for split-column
    :option:`file` |  | File to read (can be specified multiple times to check multiple files.
    :option:`files` |  | A comma separated list of files to scan (same as file except a list)




Arguments
*********
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ================================ 
    Key                              
    -------------------------------- 
    count                            
    total                            
    ok_count                         
    warn_count                       
    crit_count                       
    problem_count                    
    list                             
    ok_list                          
    warn_list                        
    crit_list                        
    problem_list                     
    detail_list                      
    status                           
    column1                          
    column2                          
    column3                          
    column4                          
    column5                          
    column6                          
    column7                          
    column8                          
    column9                          
    file                             
    filename                         
    line                             
    column()                         
    Syntax: column(<coulmn number>)  
    ================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ================================ 
    Key                              
    -------------------------------- 
    count                            
    total                            
    ok_count                         
    warn_count                       
    crit_count                       
    problem_count                    
    list                             
    ok_list                          
    warn_list                        
    crit_list                        
    problem_list                     
    detail_list                      
    status                           
    column1                          
    column2                          
    column3                          
    column4                          
    column5                          
    column6                          
    column7                          
    column8                          
    column9                          
    file                             
    filename                         
    line                             
    column()                         
    Syntax: column(<coulmn number>)  
    ================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ================================ 
    Key                              
    -------------------------------- 
    count                            
    total                            
    ok_count                         
    warn_count                       
    crit_count                       
    problem_count                    
    list                             
    ok_list                          
    warn_list                        
    crit_list                        
    problem_list                     
    detail_list                      
    status                           
    column1                          
    column2                          
    column3                          
    column4                          
    column5                          
    column6                          
    column7                          
    column8                          
    column9                          
    file                             
    filename                         
    line                             
    column()                         
    Syntax: column(<coulmn number>)  
    ================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ================================ 
    Key                              
    -------------------------------- 
    count                            
    total                            
    ok_count                         
    warn_count                       
    crit_count                       
    problem_count                    
    list                             
    ok_list                          
    warn_list                        
    crit_list                        
    problem_list                     
    detail_list                      
    status                           
    column1                          
    column2                          
    column3                          
    column4                          
    column5                          
    column6                          
    column7                          
    column8                          
    column9                          
    file                             
    filename                         
    line                             
    column()                         
    Syntax: column(<coulmn number>)  
    ================================





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

    ================================ 
    Key                              
    -------------------------------- 
    column1                          
    column2                          
    column3                          
    column4                          
    column5                          
    column6                          
    column7                          
    column8                          
    column9                          
    file                             
    filename                         
    line                             
    column()                         
    Syntax: column(<coulmn number>)  
    ================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ================================ 
    Key                              
    -------------------------------- 
    column1                          
    column2                          
    column3                          
    column4                          
    column5                          
    column6                          
    column7                          
    column8                          
    column9                          
    file                             
    filename                         
    line                             
    column()                         
    Syntax: column(<coulmn number>)  
    ================================





.. option:: line-split
    :synopsis: Character string used to split a file into several lines (default \n)

    | Character string used to split a file into several lines (default \n)

.. option:: column-split
    :synopsis: Character string to split a line into several columns (default \t)

    | Character string to split a line into several columns (default \t)

.. option:: split
    :synopsis: Alias for split-column

    | Alias for split-column

.. option:: file
    :synopsis: File to read (can be specified multiple times to check multiple files.

    | File to read (can be specified multiple times to check multiple files.
    | Notice that specifying multiple files will create an aggregate set it will not check each file individually.
    | In other words if one file contains an error the entire check will result in error or if you check the count it is the global count which is used.

.. option:: files
    :synopsis: A comma separated list of files to scan (same as file except a list)

    | A comma separated list of files to scan (same as file except a list)





/ settings/ logfile
-------------------

.. confpath:: /settings/logfile
    :synopsis: LOG FILE SECTION

**LOG FILE SECTION**

    | Section for log file checker




    **Sample**::

        # LOG FILE SECTION
        # Section for log file checker
        [/settings/logfile]




…  / real-time
--------------

.. confpath:: /settings/logfile/real-time
    :synopsis: CONFIGURE REALTIME CHECKING

**CONFIGURE REALTIME CHECKING**

    | A set of options to configure the real time checks


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`enabled` | 0 | REAL TIME CHECKING

    **Sample**::

        # CONFIGURE REALTIME CHECKING
        # A set of options to configure the real time checks
        [/settings/logfile/real-time]
        enabled=0


    .. confkey:: enabled
        :synopsis: REAL TIME CHECKING

        **REAL TIME CHECKING**

        | Spawns a background thread which waits for file changes.

        **Path**: /settings/logfile/real-time

        **Key**: enabled

        **Default value**: 0

        **Used by**: :module:`CheckLogFile`

        **Sample**::

            [/settings/logfile/real-time]
            # REAL TIME CHECKING
            enabled=0




…  / real-time / checks
-----------------------

.. confpath:: /settings/logfile/real-time/checks
    :synopsis: REALTIME FILTERS

**REALTIME FILTERS**

    | A set of filters to use in real-time mode




    **Sample**::

        # REALTIME FILTERS
        # A set of filters to use in real-time mode
        [/settings/logfile/real-time/checks]


