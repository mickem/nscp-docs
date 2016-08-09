.. default-domain:: nscp

.. module:: CheckTaskSched
    :synopsis: Check status of your scheduled jobs.

===========================================
:module:`CheckTaskSched` --- CheckTaskSched
===========================================
Check status of your scheduled jobs.

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_tasksched` | Check status of scheduled jobs.
    :query:`checktasksched` | Legacy version of check_tasksched




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)




Queries
=======
A quick reference for all available queries (check commands) in the CheckTaskSched module.

:query:`check_tasksched`
------------------------
.. query:: check_tasksched
    :synopsis: Check status of scheduled jobs.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`filter` | enabled = 1 | Filter which marks interesting items.
    :option:`warning` | exit_code != 0 | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | exit_code < 0 | Filter which marks items which generates a critical state.
    :option:`crit` |  | Short alias for critical.
    :option:`ok` |  | Filter which marks items which generates an ok state.
    :option:`debug` | N/A | Show debugging information in the log
    :option:`show-all` | N/A | Show details for all matches regardless of status (normally details are only showed for warnings and criticals).
    :option:`empty-state` | warning | Return status to use when nothing matched filter.
    :option:`perf-config` |  | Performance data generation configuration
    :option:`escape-html` | N/A | Escape any < and > characters to prevent HTML encoding
    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`top-syntax` | ${status}: ${problem_list} | Top level syntax.
    :option:`ok-syntax` | %(status): All tasks are ok | ok syntax.
    :option:`empty-syntax` | %(status): No tasks found | Empty syntax.
    :option:`detail-syntax` | ${folder}/${title}: ${exit_code} != 0 | Detail level syntax.
    :option:`perf-syntax` | ${title} | Performance alias syntax.
    :option:`force-old` | N/A | The name of the computer that you want to connect to.
    :option:`computer` |  | The name of the computer that you want to connect to.
    :option:`user` |  | The user name that is used during the connection to the computer.
    :option:`domain` |  | The domain of the user specified in the user parameter.
    :option:`password` |  | The password that is used to connect to the computer. If the user name and password are not specified, then the current token is used.
    :option:`folder` |  | The folder in which the tasks to check reside.
    :option:`recursive` |  | Recurse sub folder (defaults to true).



Samples
*******

.. include:: ../../samples/CheckTaskSched_check_tasksched_samples.inc



Arguments
*********
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    ===================== ============================================================================================================== 
    Key                   Value                                                                                                          
    --------------------- -------------------------------------------------------------------------------------------------------------- 
    count                 Number of items matching the filter. Common option for all checks.                                             
    total                  Total number of items. Common option for all checks.                                                          
    ok_count               Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count             Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count             Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count          Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                   A list of all items which matched the filter. Common option for all checks.                                   
    ok_list                A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list              A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list              A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list           A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list            A special list with critical, then warning and finally ok. Common option for all checks.                      
    status                 The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    application           Retrieves the name of the application that the task is associated with.                                        
    comment               Retrieves the comment or description for the work item.                                                        
    creator               Retrieves the creator of the work item.                                                                        
    enabled               TODO.                                                                                                          
    exit_code             Retrieves the work item's last exit code.                                                                      
    folder                The task folder                                                                                                
    has_run               True if the task has ever executed.                                                                            
    max_run_time          Retrieves the maximum length of time the task can run.                                                         
    most_recent_run_time  Retrieves the most recent time the work item began running.                                                    
    parameters            Retrieves the command-line parameters of a task.                                                               
    priority              Retrieves the priority for the task.                                                                           
    task_status           Retrieves the status of the work item.                                                                         
    title                 The task title                                                                                                 
    working_directory     Retrieves the working directory of the task.                                                                   
    ===================== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    ===================== ============================================================================================================== 
    Key                   Value                                                                                                          
    --------------------- -------------------------------------------------------------------------------------------------------------- 
    count                 Number of items matching the filter. Common option for all checks.                                             
    total                  Total number of items. Common option for all checks.                                                          
    ok_count               Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count             Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count             Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count          Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                   A list of all items which matched the filter. Common option for all checks.                                   
    ok_list                A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list              A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list              A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list           A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list            A special list with critical, then warning and finally ok. Common option for all checks.                      
    status                 The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    application           Retrieves the name of the application that the task is associated with.                                        
    comment               Retrieves the comment or description for the work item.                                                        
    creator               Retrieves the creator of the work item.                                                                        
    enabled               TODO.                                                                                                          
    exit_code             Retrieves the work item's last exit code.                                                                      
    folder                The task folder                                                                                                
    has_run               True if the task has ever executed.                                                                            
    max_run_time          Retrieves the maximum length of time the task can run.                                                         
    most_recent_run_time  Retrieves the most recent time the work item began running.                                                    
    parameters            Retrieves the command-line parameters of a task.                                                               
    priority              Retrieves the priority for the task.                                                                           
    task_status           Retrieves the status of the work item.                                                                         
    title                 The task title                                                                                                 
    working_directory     Retrieves the working directory of the task.                                                                   
    ===================== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    ===================== ============================================================================================================== 
    Key                   Value                                                                                                          
    --------------------- -------------------------------------------------------------------------------------------------------------- 
    count                 Number of items matching the filter. Common option for all checks.                                             
    total                  Total number of items. Common option for all checks.                                                          
    ok_count               Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count             Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count             Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count          Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                   A list of all items which matched the filter. Common option for all checks.                                   
    ok_list                A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list              A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list              A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list           A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list            A special list with critical, then warning and finally ok. Common option for all checks.                      
    status                 The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    application           Retrieves the name of the application that the task is associated with.                                        
    comment               Retrieves the comment or description for the work item.                                                        
    creator               Retrieves the creator of the work item.                                                                        
    enabled               TODO.                                                                                                          
    exit_code             Retrieves the work item's last exit code.                                                                      
    folder                The task folder                                                                                                
    has_run               True if the task has ever executed.                                                                            
    max_run_time          Retrieves the maximum length of time the task can run.                                                         
    most_recent_run_time  Retrieves the most recent time the work item began running.                                                    
    parameters            Retrieves the command-line parameters of a task.                                                               
    priority              Retrieves the priority for the task.                                                                           
    task_status           Retrieves the status of the work item.                                                                         
    title                 The task title                                                                                                 
    working_directory     Retrieves the working directory of the task.                                                                   
    ===================== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    ===================== ============================================================================================================== 
    Key                   Value                                                                                                          
    --------------------- -------------------------------------------------------------------------------------------------------------- 
    count                 Number of items matching the filter. Common option for all checks.                                             
    total                  Total number of items. Common option for all checks.                                                          
    ok_count               Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count             Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count             Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count          Number of items matched either warning or critical criteria. Common option for all checks.                    
    list                   A list of all items which matched the filter. Common option for all checks.                                   
    ok_list                A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list              A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list              A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list           A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list            A special list with critical, then warning and finally ok. Common option for all checks.                      
    status                 The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    application           Retrieves the name of the application that the task is associated with.                                        
    comment               Retrieves the comment or description for the work item.                                                        
    creator               Retrieves the creator of the work item.                                                                        
    enabled               TODO.                                                                                                          
    exit_code             Retrieves the work item's last exit code.                                                                      
    folder                The task folder                                                                                                
    has_run               True if the task has ever executed.                                                                            
    max_run_time          Retrieves the maximum length of time the task can run.                                                         
    most_recent_run_time  Retrieves the most recent time the work item began running.                                                    
    parameters            Retrieves the command-line parameters of a task.                                                               
    priority              Retrieves the priority for the task.                                                                           
    task_status           Retrieves the status of the work item.                                                                         
    title                 The task title                                                                                                 
    working_directory     Retrieves the working directory of the task.                                                                   
    ===================== ==============================================================================================================





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

    ===================== ======================================================================== 
    Key                   Value                                                                    
    --------------------- ------------------------------------------------------------------------ 
    application           Retrieves the name of the application that the task is associated with.  
    comment               Retrieves the comment or description for the work item.                  
    creator               Retrieves the creator of the work item.                                  
    enabled               TODO.                                                                    
    exit_code             Retrieves the work item's last exit code.                                
    folder                The task folder                                                          
    has_run               True if the task has ever executed.                                      
    max_run_time          Retrieves the maximum length of time the task can run.                   
    most_recent_run_time  Retrieves the most recent time the work item began running.              
    parameters            Retrieves the command-line parameters of a task.                         
    priority              Retrieves the priority for the task.                                     
    task_status           Retrieves the status of the work item.                                   
    title                 The task title                                                           
    working_directory     Retrieves the working directory of the task.                             
    ===================== ========================================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    ===================== ======================================================================== 
    Key                   Value                                                                    
    --------------------- ------------------------------------------------------------------------ 
    application           Retrieves the name of the application that the task is associated with.  
    comment               Retrieves the comment or description for the work item.                  
    creator               Retrieves the creator of the work item.                                  
    enabled               TODO.                                                                    
    exit_code             Retrieves the work item's last exit code.                                
    folder                The task folder                                                          
    has_run               True if the task has ever executed.                                      
    max_run_time          Retrieves the maximum length of time the task can run.                   
    most_recent_run_time  Retrieves the most recent time the work item began running.              
    parameters            Retrieves the command-line parameters of a task.                         
    priority              Retrieves the priority for the task.                                     
    task_status           Retrieves the status of the work item.                                   
    title                 The task title                                                           
    working_directory     Retrieves the working directory of the task.                             
    ===================== ========================================================================





.. option:: force-old
    :synopsis: The name of the computer that you want to connect to.

    | The name of the computer that you want to connect to.

.. option:: computer
    :synopsis: The name of the computer that you want to connect to.

    | The name of the computer that you want to connect to.

.. option:: user
    :synopsis: The user name that is used during the connection to the computer.

    | The user name that is used during the connection to the computer.

.. option:: domain
    :synopsis: The domain of the user specified in the user parameter.

    | The domain of the user specified in the user parameter.

.. option:: password
    :synopsis: The password that is used to connect to the computer. If the user name and password are not specified, then the current token is used.

    | The password that is used to connect to the computer. If the user name and password are not specified, then the current token is used.

.. option:: folder
    :synopsis: The folder in which the tasks to check reside.

    | The folder in which the tasks to check reside.

.. option:: recursive
    :synopsis: Recurse sub folder (defaults to true).

    | Recurse sub folder (defaults to true).

:query:`checktasksched`
-----------------------
.. query:: checktasksched
    :synopsis: Legacy version of check_tasksched

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`warn` |  | Warning bounds.
    :option:`crit` |  | Critical bounds.
    :option:`MaxWarn` |  | Maximum value before a warning is returned.
    :option:`MaxCrit` |  | Maximum value before a critical is returned.
    :option:`MinWarn` |  | Minimum value before a warning is returned.
    :option:`MinCrit` |  | Minimum value before a critical is returned.
    :option:`Counter` |  | The time to check
    :option:`truncate` |  | Deprecated option
    :option:`syntax` |  | Syntax (same as detail-syntax in the check_tasksched check)
    :option:`master-syntax` |  | Master Syntax (same as top-syntax in the check_tasksched check)
    :option:`filter` |  | Filter (same as filter in the check_tasksched check)
    :option:`debug` | N/A | Filter (same as filter in the check_tasksched check)




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

.. option:: warn
    :synopsis: Warning bounds.

    | Warning bounds.

.. option:: crit
    :synopsis: Critical bounds.

    | Critical bounds.

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

.. option:: Counter
    :synopsis: The time to check

    | The time to check

.. option:: truncate
    :synopsis: Deprecated option

    | Deprecated option

.. option:: syntax
    :synopsis: Syntax (same as detail-syntax in the check_tasksched check)

    | Syntax (same as detail-syntax in the check_tasksched check)

.. option:: master-syntax
    :synopsis: Master Syntax (same as top-syntax in the check_tasksched check)

    | Master Syntax (same as top-syntax in the check_tasksched check)

.. option:: filter
    :synopsis: Filter (same as filter in the check_tasksched check)

    | Filter (same as filter in the check_tasksched check)

.. option:: debug
    :synopsis: Filter (same as filter in the check_tasksched check)

    | Filter (same as filter in the check_tasksched check)



