.. default-domain:: nscp

.. module:: CheckLogFile
    :synopsis: File for checking log files and various other forms of updating text files

=======================================
:module:`CheckLogFile` --- CheckLogFile
=======================================
File for checking log files and various other forms of updating text files

**Queries (Overview)**:

A list of all avalible queries (check commands)

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

    checklogfile | :query:`check_logfile`


**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/logfile/real-time` | :confkey:`~/settings/logfile/real-time.enabled` | REAL TIME CHECKING


Sample keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Default Value", "Description"

    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.alias` | ALIAS
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.column split` | COLUMN SPLIT
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.command` | COMMAND NAME
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.critical` | CRITCAL FILTER
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.debug` | DEBUG
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.destination` | DESTINATION
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.detail syntax` | SYNTAX
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.empty message` | EMPTY MESSAGE
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.file` | FILE
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.files` | FILES
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.filter` | FILTER
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.is template` | IS TEMPLATE
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.maximum age` | MAGIMUM AGE
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.ok` | OK FILTER
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.parent` | PARENT
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.perf config` | PERF CONFIG
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.severity` | SEVERITY
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.target` | DESTINATION
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.top syntax` | SYNTAX
    :confpath:`/settings/logfile/real-time/checks/sample` | :confkey:`~/settings/logfile/real-time/checks/sample.warning` | WARNING FILTER


Queries
=======
A quick reference for all avalible queries (check commands) in the CheckLogFile module.

:query:`check_logfile`
----------------------
.. query:: check_logfile
    :synopsis: Check for errors in log file or generic pattern matching in text files.

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
    :option:`empty-syntax` | No matches | Message to display when nothing matched filter.
    :option:`empty-state` | unknown | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`top-syntax` | ${count}/${total} (${problem_list}) | Top level syntax.
    :option:`detail-syntax` | ${column1} | Detail level syntax.
    :option:`perf-syntax` | ${column1} | Performance alias syntax.
    :option:`line-split` | \n | Character string used to split a file into several lines (default \n)
    :option:`column-split` | \t | Character string to split a line into several columns (default \t)
    :option:`split` |  | Alias for split-column
    :option:`file` |  | File to read (can be specified multiple times to check multiple files.
    :option:`files` |  | A comma separated list of files to scan (same as file except a list)


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
    | Avalible options:

      ================================ 
      Key                              
      ================================ 
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
      status                           
      ================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Avalible options:

      ================================ 
      Key                              
      ================================ 
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
      status                           
      ================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Avalible options:

      ================================ 
      Key                              
      ================================ 
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
      status                           
      ================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Avalible options:

      ================================ 
      Key                              
      ================================ 
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
      status                           
      ================================





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
      %(column1)        The value in the first column                                                   
      %(column2)        The value in the second column                                                  
      %(column3)        The value in the third column                                                   
      %(column4)        The value in the 4:th column                                                    
      %(column5)        The value in the 5:th column                                                    
      %(column6)        The value in the 6:th column                                                    
      %(column7)        The value in the 7:th column                                                    
      %(column8)        The value in the 8:th column                                                    
      %(column9)        The value in the 9:th column                                                    
      %(file)           The name of the file                                                            
      %(filename)       The name of the file                                                            
      %(line)           Match the content of an entire line                                             
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
      %(column1)        The value in the first column                                                   
      %(column2)        The value in the second column                                                  
      %(column3)        The value in the third column                                                   
      %(column4)        The value in the 4:th column                                                    
      %(column5)        The value in the 5:th column                                                    
      %(column6)        The value in the 6:th column                                                    
      %(column7)        The value in the 7:th column                                                    
      %(column8)        The value in the 8:th column                                                    
      %(column9)        The value in the 9:th column                                                    
      %(file)           The name of the file                                                            
      %(filename)       The name of the file                                                            
      %(line)           Match the content of an entire line                                             
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
      %(column1)        The value in the first column                                                   
      %(column2)        The value in the second column                                                  
      %(column3)        The value in the third column                                                   
      %(column4)        The value in the 4:th column                                                    
      %(column5)        The value in the 5:th column                                                    
      %(column6)        The value in the 6:th column                                                    
      %(column7)        The value in the 7:th column                                                    
      %(column8)        The value in the 8:th column                                                    
      %(column9)        The value in the 9:th column                                                    
      %(file)           The name of the file                                                            
      %(filename)       The name of the file                                                            
      %(line)           Match the content of an entire line                                             
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






… 
--
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




…  / real-time / checks / sample
--------------------------------
.. confpath:: /settings/logfile/real-time/checks/sample
    :synopsis: REAL TIME FILTER DEFENITION

    **REAL TIME FILTER DEFENITION**

    | Definition for real time filter: sample


.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Key", "Default Value", "Description"

    :confkey:`alias` |  | ALIAS
    :confkey:`column split` |  | COLUMN SPLIT
    :confkey:`command` |  | COMMAND NAME
    :confkey:`critical` |  | CRITCAL FILTER
    :confkey:`debug` | 0 | DEBUG
    :confkey:`destination` |  | DESTINATION
    :confkey:`detail syntax` |  | SYNTAX
    :confkey:`empty message` | eventlog found no records | EMPTY MESSAGE
    :confkey:`file` |  | FILE
    :confkey:`files` |  | FILES
    :confkey:`filter` |  | FILTER
    :confkey:`is template` | 0 | IS TEMPLATE
    :confkey:`maximum age` | 5m | MAGIMUM AGE
    :confkey:`ok` |  | OK FILTER
    :confkey:`parent` | default | PARENT
    :confkey:`perf config` |  | PERF CONFIG
    :confkey:`severity` |  | SEVERITY
    :confkey:`target` |  | DESTINATION
    :confkey:`top syntax` |  | SYNTAX
    :confkey:`warning` |  | WARNING FILTER


**Sample**::

    # REAL TIME FILTER DEFENITION
    # Definition for real time filter: sample
    [/settings/logfile/real-time/checks/sample]
    alias=
    column split=
    command=
    critical=
    debug=0
    destination=
    detail syntax=
    empty message=eventlog found no records
    file=
    files=
    filter=
    is template=0
    maximum age=5m
    ok=
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

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: alias

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # ALIAS
        alias=


.. confkey:: column split
    :synopsis: COLUMN SPLIT

    **COLUMN SPLIT**

    | THe character(s) to use when splitting on column level

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: column split

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # COLUMN SPLIT
        column split=


.. confkey:: command
    :synopsis: COMMAND NAME

    **COMMAND NAME**

    | The name of the command (think nagios service name) to report up stream (defaults to alias if not set)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: command

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # COMMAND NAME
        command=


.. confkey:: critical
    :synopsis: CRITCAL FILTER

    **CRITCAL FILTER**

    | If any rows match this filter severity will escalated to CRITCAL

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: critical

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # CRITCAL FILTER
        critical=


.. confkey:: debug
    :synopsis: DEBUG

    **DEBUG**

    | Enable this to display debug information for this match filter

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: debug

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # DEBUG
        debug=0


.. confkey:: destination
    :synopsis: DESTINATION

    **DESTINATION**

    | The destination for intercepted messages

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: destination

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # DESTINATION
        destination=


.. confkey:: detail syntax
    :synopsis: SYNTAX

    **SYNTAX**

    | Format string for dates

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: detail syntax

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # SYNTAX
        detail syntax=


.. confkey:: empty message
    :synopsis: EMPTY MESSAGE

    **EMPTY MESSAGE**

    | The message to display if nothing matches the filter (generally considered the ok state).

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: empty message

    **Default value**: eventlog found no records

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # EMPTY MESSAGE
        empty message=eventlog found no records


.. confkey:: file
    :synopsis: FILE

    **FILE**

    | The eventlog record to filter on (if set to 'all' means all enabled logs)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: file

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # FILE
        file=


.. confkey:: files
    :synopsis: FILES

    **FILES**

    | The eventlog record to filter on (if set to 'all' means all enabled logs)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: files

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # FILES
        files=


.. confkey:: filter
    :synopsis: FILTER

    **FILTER**

    | Scan files for matching rows for each matching rows an OK message will be submitted

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: filter

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # FILTER
        filter=


.. confkey:: is template
    :synopsis: IS TEMPLATE

    **IS TEMPLATE**

    | Declare this object as a template (this means it will not be available as a separate object)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: is template

    **Default value**: 0

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # IS TEMPLATE
        is template=0


.. confkey:: maximum age
    :synopsis: MAGIMUM AGE

    **MAGIMUM AGE**

    | How long before reporting "ok".
    | If this is set to "false" no periodic ok messages will be reported only errors.

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: maximum age

    **Default value**: 5m

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # MAGIMUM AGE
        maximum age=5m


.. confkey:: ok
    :synopsis: OK FILTER

    **OK FILTER**

    | If any rows match this filter severity will escalated down to OK

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: ok

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # OK FILTER
        ok=


.. confkey:: parent
    :synopsis: PARENT

    **PARENT**

    | The parent the target inherits from

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: parent

    **Default value**: default

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # PARENT
        parent=default


.. confkey:: perf config
    :synopsis: PERF CONFIG

    **PERF CONFIG**

    | Performance data configuration

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: perf config

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # PERF CONFIG
        perf config=


.. confkey:: severity
    :synopsis: SEVERITY

    **SEVERITY**

    | THe severity of this message (OK, WARNING, CRITICAL, UNKNOWN)

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: severity

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # SEVERITY
        severity=


.. confkey:: target
    :synopsis: DESTINATION

    **DESTINATION**

    | Same as destination

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: target

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # DESTINATION
        target=


.. confkey:: top syntax
    :synopsis: SYNTAX

    **SYNTAX**

    | Format string for dates

    **Advanced** (means it is not commonly used)

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: top syntax

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # SYNTAX
        top syntax=


.. confkey:: warning
    :synopsis: WARNING FILTER

    **WARNING FILTER**

    | If any rows match this filter severity will escalated to WARNING

    **Path**: /settings/logfile/real-time/checks/sample

    **Key**: warning

    **Default value**: 

    **Sample key**: This key is provided as a sample to show how to configure objects

    **Used by**: :module:`CheckLogFile`

    **Sample**::

        [/settings/logfile/real-time/checks/sample]
        # WARNING FILTER
        warning=


