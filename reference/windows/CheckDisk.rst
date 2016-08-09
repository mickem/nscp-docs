.. default-domain:: nscp

.. module:: CheckDisk
    :synopsis: CheckDisk can check various file and disk related things.

=================================
:module:`CheckDisk` --- CheckDisk
=================================
CheckDisk can check various file and disk related things.

**Queries (Overview)**:

A list of all available queries (check commands)

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Command", "Description"

    :query:`check_drivesize` | Check the size (free-space) of a drive or volume.
    :query:`check_files` | Check various aspects of a file and/or folder.
    :query:`checkdrivesize` | Legacy version of check_drivesize
    :query:`checkfiles` | Legacy version of check_drivesize




**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)




Queries
=======
A quick reference for all available queries (check commands) in the CheckDisk module.

:query:`check_drivesize`
------------------------
.. query:: check_drivesize
    :synopsis: Check the size (free-space) of a drive or volume.

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`filter` | mounted = 1 | Filter which marks interesting items.
    :option:`warning` | used > 80% | Filter which marks items which generates a warning state.
    :option:`warn` |  | Short alias for warning
    :option:`critical` | used > 90% | Filter which marks items which generates a critical state.
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
    :option:`top-syntax` | ${status} ${problem_list} | Top level syntax.
    :option:`ok-syntax` | %(status) All %(count) drive(s) are ok | ok syntax.
    :option:`empty-syntax` | %(status): No drives found | Empty syntax.
    :option:`detail-syntax` | ${drive_or_name}: ${used}/${size} used | Detail level syntax.
    :option:`perf-syntax` | ${drive_or_id} | Performance alias syntax.
    :option:`drive` |  | The drives to check.
    :option:`ignore-unreadable` | N/A | DEPRECATED (manually set filter instead) Ignore drives which are not reachable by the current user.
    :option:`mounted` | N/A | DEPRECATED (this is now default) Show only mounted rives i.e. drives which have a mount point.
    :option:`magic` |  | Magic number for use with scaling drive sizes.
    :option:`exclude` |  | A list of drives not to check
    :option:`total` | N/A | Include the total of all matching drives



Samples
*******

.. include:: ../../samples/CheckDisk_check_drivesize_samples.inc



Arguments
*********
.. option:: filter
    :synopsis: Filter which marks interesting items.

    | Filter which marks interesting items.
    | Interesting items are items which will be included in the check.
    | They do not denote warning or critical state instead it defines which items are relevant and you can remove unwanted items.
    | Available options :

    =============== ============================================================================================================== 
    Key             Value                                                                                                          
    --------------- -------------------------------------------------------------------------------------------------------------- 
    count           Number of items matching the filter. Common option for all checks.                                             
    total            Total number of items. Common option for all checks.                                                          
    ok_count         Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count       Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count       Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count    Number of items matched either warning or critical criteria. Common option for all checks.                    
    list             A list of all items which matched the filter. Common option for all checks.                                   
    ok_list          A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list        A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list        A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list     A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list      A special list with critical, then warning and finally ok. Common option for all checks.                      
    status           The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    drive           Technical name of drive                                                                                        
    drive_or_id     Drive letter if present if not use id                                                                          
    drive_or_name   Drive letter if present if not use name                                                                        
    erasable        1 (true) if drive is erasable                                                                                  
    flags           String representation of flags                                                                                 
    free            Shorthand for total_free (Number of free bytes)                                                                
    free_pct        Shorthand for total_free_pct (% free space)                                                                    
    hotplug         1 (true) if drive is hotplugable                                                                               
    id              Drive or id of drive                                                                                           
    mounted         Check if a drive is mounted                                                                                    
    name            Descriptive name of drive                                                                                      
    readable        1 (true) if drive is readable                                                                                  
    removable       1 (true) if drive is removable                                                                                 
    size            Total size of drive                                                                                            
    total_free      Number of free bytes                                                                                           
    total_free_pct  % free space                                                                                                   
    total_used      Number of used bytes                                                                                           
    total_used_pct  % used space                                                                                                   
    type            Type of drive                                                                                                  
    used            Number of used bytes                                                                                           
    used_pct        Shorthand for total_used_pct (% used space)                                                                    
    user_free       Free space available to user (which runs NSClient++)                                                           
    user_free_pct   % free space available to user                                                                                 
    user_used       Number of used bytes (related to user)                                                                         
    user_used_pct   % used space available to user                                                                                 
    writable        1 (true) if drive is writable                                                                                  
    =============== ==============================================================================================================





.. option:: warning
    :synopsis: Filter which marks items which generates a warning state.

    | Filter which marks items which generates a warning state.
    | If anything matches this filter the return status will be escalated to warning.
    | Available options :

    =============== ============================================================================================================== 
    Key             Value                                                                                                          
    --------------- -------------------------------------------------------------------------------------------------------------- 
    count           Number of items matching the filter. Common option for all checks.                                             
    total            Total number of items. Common option for all checks.                                                          
    ok_count         Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count       Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count       Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count    Number of items matched either warning or critical criteria. Common option for all checks.                    
    list             A list of all items which matched the filter. Common option for all checks.                                   
    ok_list          A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list        A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list        A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list     A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list      A special list with critical, then warning and finally ok. Common option for all checks.                      
    status           The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    drive           Technical name of drive                                                                                        
    drive_or_id     Drive letter if present if not use id                                                                          
    drive_or_name   Drive letter if present if not use name                                                                        
    erasable        1 (true) if drive is erasable                                                                                  
    flags           String representation of flags                                                                                 
    free            Shorthand for total_free (Number of free bytes)                                                                
    free_pct        Shorthand for total_free_pct (% free space)                                                                    
    hotplug         1 (true) if drive is hotplugable                                                                               
    id              Drive or id of drive                                                                                           
    mounted         Check if a drive is mounted                                                                                    
    name            Descriptive name of drive                                                                                      
    readable        1 (true) if drive is readable                                                                                  
    removable       1 (true) if drive is removable                                                                                 
    size            Total size of drive                                                                                            
    total_free      Number of free bytes                                                                                           
    total_free_pct  % free space                                                                                                   
    total_used      Number of used bytes                                                                                           
    total_used_pct  % used space                                                                                                   
    type            Type of drive                                                                                                  
    used            Number of used bytes                                                                                           
    used_pct        Shorthand for total_used_pct (% used space)                                                                    
    user_free       Free space available to user (which runs NSClient++)                                                           
    user_free_pct   % free space available to user                                                                                 
    user_used       Number of used bytes (related to user)                                                                         
    user_used_pct   % used space available to user                                                                                 
    writable        1 (true) if drive is writable                                                                                  
    =============== ==============================================================================================================





.. option:: warn
    :synopsis: Short alias for warning

    | Short alias for warning

.. option:: critical
    :synopsis: Filter which marks items which generates a critical state.

    | Filter which marks items which generates a critical state.
    | If anything matches this filter the return status will be escalated to critical.
    | Available options :

    =============== ============================================================================================================== 
    Key             Value                                                                                                          
    --------------- -------------------------------------------------------------------------------------------------------------- 
    count           Number of items matching the filter. Common option for all checks.                                             
    total            Total number of items. Common option for all checks.                                                          
    ok_count         Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count       Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count       Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count    Number of items matched either warning or critical criteria. Common option for all checks.                    
    list             A list of all items which matched the filter. Common option for all checks.                                   
    ok_list          A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list        A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list        A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list     A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list      A special list with critical, then warning and finally ok. Common option for all checks.                      
    status           The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    drive           Technical name of drive                                                                                        
    drive_or_id     Drive letter if present if not use id                                                                          
    drive_or_name   Drive letter if present if not use name                                                                        
    erasable        1 (true) if drive is erasable                                                                                  
    flags           String representation of flags                                                                                 
    free            Shorthand for total_free (Number of free bytes)                                                                
    free_pct        Shorthand for total_free_pct (% free space)                                                                    
    hotplug         1 (true) if drive is hotplugable                                                                               
    id              Drive or id of drive                                                                                           
    mounted         Check if a drive is mounted                                                                                    
    name            Descriptive name of drive                                                                                      
    readable        1 (true) if drive is readable                                                                                  
    removable       1 (true) if drive is removable                                                                                 
    size            Total size of drive                                                                                            
    total_free      Number of free bytes                                                                                           
    total_free_pct  % free space                                                                                                   
    total_used      Number of used bytes                                                                                           
    total_used_pct  % used space                                                                                                   
    type            Type of drive                                                                                                  
    used            Number of used bytes                                                                                           
    used_pct        Shorthand for total_used_pct (% used space)                                                                    
    user_free       Free space available to user (which runs NSClient++)                                                           
    user_free_pct   % free space available to user                                                                                 
    user_used       Number of used bytes (related to user)                                                                         
    user_used_pct   % used space available to user                                                                                 
    writable        1 (true) if drive is writable                                                                                  
    =============== ==============================================================================================================





.. option:: crit
    :synopsis: Short alias for critical.

    | Short alias for critical.

.. option:: ok
    :synopsis: Filter which marks items which generates an ok state.

    | Filter which marks items which generates an ok state.
    | If anything matches this any previous state for this item will be reset to ok.
    | Available options :

    =============== ============================================================================================================== 
    Key             Value                                                                                                          
    --------------- -------------------------------------------------------------------------------------------------------------- 
    count           Number of items matching the filter. Common option for all checks.                                             
    total            Total number of items. Common option for all checks.                                                          
    ok_count         Number of items matched the ok criteria. Common option for all checks.                                        
    warn_count       Number of items matched the warning criteria. Common option for all checks.                                   
    crit_count       Number of items matched the critical criteria. Common option for all checks.                                  
    problem_count    Number of items matched either warning or critical criteria. Common option for all checks.                    
    list             A list of all items which matched the filter. Common option for all checks.                                   
    ok_list          A list of all items which matched the ok criteria. Common option for all checks.                              
    warn_list        A list of all items which matched the warning criteria. Common option for all checks.                         
    crit_list        A list of all items which matched the critical criteria. Common option for all checks.                        
    problem_list     A list of all items which matched either the critical or the warning criteria. Common option for all checks.  
    detail_list      A special list with critical, then warning and finally ok. Common option for all checks.                      
    status           The returned status (OK/WARN/CRIT/UNKNOWN). Common option for all checks.                                     
    drive           Technical name of drive                                                                                        
    drive_or_id     Drive letter if present if not use id                                                                          
    drive_or_name   Drive letter if present if not use name                                                                        
    erasable        1 (true) if drive is erasable                                                                                  
    flags           String representation of flags                                                                                 
    free            Shorthand for total_free (Number of free bytes)                                                                
    free_pct        Shorthand for total_free_pct (% free space)                                                                    
    hotplug         1 (true) if drive is hotplugable                                                                               
    id              Drive or id of drive                                                                                           
    mounted         Check if a drive is mounted                                                                                    
    name            Descriptive name of drive                                                                                      
    readable        1 (true) if drive is readable                                                                                  
    removable       1 (true) if drive is removable                                                                                 
    size            Total size of drive                                                                                            
    total_free      Number of free bytes                                                                                           
    total_free_pct  % free space                                                                                                   
    total_used      Number of used bytes                                                                                           
    total_used_pct  % used space                                                                                                   
    type            Type of drive                                                                                                  
    used            Number of used bytes                                                                                           
    used_pct        Shorthand for total_used_pct (% used space)                                                                    
    user_free       Free space available to user (which runs NSClient++)                                                           
    user_free_pct   % free space available to user                                                                                 
    user_used       Number of used bytes (related to user)                                                                         
    user_used_pct   % used space available to user                                                                                 
    writable        1 (true) if drive is writable                                                                                  
    =============== ==============================================================================================================





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

    =============== ===================================================== 
    Key             Value                                                 
    --------------- ----------------------------------------------------- 
    drive           Technical name of drive                               
    drive_or_id     Drive letter if present if not use id                 
    drive_or_name   Drive letter if present if not use name               
    erasable        1 (true) if drive is erasable                         
    flags           String representation of flags                        
    free            Shorthand for total_free (Number of free bytes)       
    free_pct        Shorthand for total_free_pct (% free space)           
    hotplug         1 (true) if drive is hotplugable                      
    id              Drive or id of drive                                  
    mounted         Check if a drive is mounted                           
    name            Descriptive name of drive                             
    readable        1 (true) if drive is readable                         
    removable       1 (true) if drive is removable                        
    size            Total size of drive                                   
    total_free      Number of free bytes                                  
    total_free_pct  % free space                                          
    total_used      Number of used bytes                                  
    total_used_pct  % used space                                          
    type            Type of drive                                         
    used            Number of used bytes                                  
    used_pct        Shorthand for total_used_pct (% used space)           
    user_free       Free space available to user (which runs NSClient++)  
    user_free_pct   % free space available to user                        
    user_used       Number of used bytes (related to user)                
    user_used_pct   % used space available to user                        
    writable        1 (true) if drive is writable                         
    =============== =====================================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    =============== ===================================================== 
    Key             Value                                                 
    --------------- ----------------------------------------------------- 
    drive           Technical name of drive                               
    drive_or_id     Drive letter if present if not use id                 
    drive_or_name   Drive letter if present if not use name               
    erasable        1 (true) if drive is erasable                         
    flags           String representation of flags                        
    free            Shorthand for total_free (Number of free bytes)       
    free_pct        Shorthand for total_free_pct (% free space)           
    hotplug         1 (true) if drive is hotplugable                      
    id              Drive or id of drive                                  
    mounted         Check if a drive is mounted                           
    name            Descriptive name of drive                             
    readable        1 (true) if drive is readable                         
    removable       1 (true) if drive is removable                        
    size            Total size of drive                                   
    total_free      Number of free bytes                                  
    total_free_pct  % free space                                          
    total_used      Number of used bytes                                  
    total_used_pct  % used space                                          
    type            Type of drive                                         
    used            Number of used bytes                                  
    used_pct        Shorthand for total_used_pct (% used space)           
    user_free       Free space available to user (which runs NSClient++)  
    user_free_pct   % free space available to user                        
    user_used       Number of used bytes (related to user)                
    user_used_pct   % used space available to user                        
    writable        1 (true) if drive is writable                         
    =============== =====================================================





.. option:: drive
    :synopsis: The drives to check.

    | The drives to check.
    | Multiple options can be used to check more then one drive or wildcards can be used to indicate multiple drives to check. Examples: drive=c, drive=d:, drive=*, drive=all-volumes, drive=all-drives

.. option:: ignore-unreadable
    :synopsis: DEPRECATED (manually set filter instead) Ignore drives which are not reachable by the current user.

    | DEPRECATED (manually set filter instead) Ignore drives which are not reachable by the current user.
    | For instance Microsoft Office creates a drive which cannot be read by normal users.

.. option:: mounted
    :synopsis: DEPRECATED (this is now default) Show only mounted rives i.e. drives which have a mount point.

    | DEPRECATED (this is now default) Show only mounted rives i.e. drives which have a mount point.

.. option:: magic
    :synopsis: Magic number for use with scaling drive sizes.

    | Magic number for use with scaling drive sizes.

.. option:: exclude
    :synopsis: A list of drives not to check

    | A list of drives not to check

.. option:: total
    :synopsis: Include the total of all matching drives

    | Include the total of all matching drives

:query:`check_files`
--------------------
.. query:: check_files
    :synopsis: Check various aspects of a file and/or folder.

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
    :option:`top-syntax` | ${status}: ${problem_count}/${count} files (${problem_list}) | Top level syntax.
    :option:`ok-syntax` | %(status): All %(count) files are ok | ok syntax.
    :option:`empty-syntax` | No files found | Empty syntax.
    :option:`detail-syntax` | ${name} | Detail level syntax.
    :option:`perf-syntax` | ${name} | Performance alias syntax.
    :option:`path` |  | The path to search for files under.
    :option:`file` |  | Alias for path.
    :option:`paths` |  | A comma separated list of paths to scan
    :option:`pattern` | *.* | The pattern of files to search for (works like a filter but is faster and can be combined with a filter).
    :option:`max-depth` |  | Maximum depth to recurse
    :option:`total` | filter | Include the total of either (filter) all files matching the filter or (all) all files regardless of the filter



Samples
*******

.. include:: ../../samples/CheckDisk_check_files_samples.inc



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
    access         Last access time                                                                                               
    access_l       Last access time (local time)                                                                                  
    access_u       Last access time (UTC)                                                                                         
    age            Seconds since file was last written                                                                            
    creation       When file was created                                                                                          
    creation_l     When file was created (local time)                                                                             
    creation_u     When file was created (UTC)                                                                                    
    file           The name of the file                                                                                           
    filename       The name of the file                                                                                           
    line_count     Number of lines in the file (text files)                                                                       
    name           The name of the file                                                                                           
    path           Path of file                                                                                                   
    size           File size                                                                                                      
    total          True if this is the total object                                                                               
    type           Type of item (file or dir)                                                                                     
    version        Windows exe/dll file version                                                                                   
    write          Alias for written                                                                                              
    written        When file was last written to                                                                                  
    written_l      When file was last written  to (local time)                                                                    
    written_u      When file was last written  to (UTC)                                                                           
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
    access         Last access time                                                                                               
    access_l       Last access time (local time)                                                                                  
    access_u       Last access time (UTC)                                                                                         
    age            Seconds since file was last written                                                                            
    creation       When file was created                                                                                          
    creation_l     When file was created (local time)                                                                             
    creation_u     When file was created (UTC)                                                                                    
    file           The name of the file                                                                                           
    filename       The name of the file                                                                                           
    line_count     Number of lines in the file (text files)                                                                       
    name           The name of the file                                                                                           
    path           Path of file                                                                                                   
    size           File size                                                                                                      
    total          True if this is the total object                                                                               
    type           Type of item (file or dir)                                                                                     
    version        Windows exe/dll file version                                                                                   
    write          Alias for written                                                                                              
    written        When file was last written to                                                                                  
    written_l      When file was last written  to (local time)                                                                    
    written_u      When file was last written  to (UTC)                                                                           
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
    access         Last access time                                                                                               
    access_l       Last access time (local time)                                                                                  
    access_u       Last access time (UTC)                                                                                         
    age            Seconds since file was last written                                                                            
    creation       When file was created                                                                                          
    creation_l     When file was created (local time)                                                                             
    creation_u     When file was created (UTC)                                                                                    
    file           The name of the file                                                                                           
    filename       The name of the file                                                                                           
    line_count     Number of lines in the file (text files)                                                                       
    name           The name of the file                                                                                           
    path           Path of file                                                                                                   
    size           File size                                                                                                      
    total          True if this is the total object                                                                               
    type           Type of item (file or dir)                                                                                     
    version        Windows exe/dll file version                                                                                   
    write          Alias for written                                                                                              
    written        When file was last written to                                                                                  
    written_l      When file was last written  to (local time)                                                                    
    written_u      When file was last written  to (UTC)                                                                           
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
    access         Last access time                                                                                               
    access_l       Last access time (local time)                                                                                  
    access_u       Last access time (UTC)                                                                                         
    age            Seconds since file was last written                                                                            
    creation       When file was created                                                                                          
    creation_l     When file was created (local time)                                                                             
    creation_u     When file was created (UTC)                                                                                    
    file           The name of the file                                                                                           
    filename       The name of the file                                                                                           
    line_count     Number of lines in the file (text files)                                                                       
    name           The name of the file                                                                                           
    path           Path of file                                                                                                   
    size           File size                                                                                                      
    total          True if this is the total object                                                                               
    type           Type of item (file or dir)                                                                                     
    version        Windows exe/dll file version                                                                                   
    write          Alias for written                                                                                              
    written        When file was last written to                                                                                  
    written_l      When file was last written  to (local time)                                                                    
    written_u      When file was last written  to (UTC)                                                                           
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

    =========== ============================================ 
    Key         Value                                        
    ----------- -------------------------------------------- 
    access      Last access time                             
    access_l    Last access time (local time)                
    access_u    Last access time (UTC)                       
    age         Seconds since file was last written          
    creation    When file was created                        
    creation_l  When file was created (local time)           
    creation_u  When file was created (UTC)                  
    file        The name of the file                         
    filename    The name of the file                         
    line_count  Number of lines in the file (text files)     
    name        The name of the file                         
    path        Path of file                                 
    size        File size                                    
    total       True if this is the total object             
    type        Type of item (file or dir)                   
    version     Windows exe/dll file version                 
    write       Alias for written                            
    written     When file was last written to                
    written_l   When file was last written  to (local time)  
    written_u   When file was last written  to (UTC)         
    =========== ============================================





.. option:: perf-syntax
    :synopsis: Performance alias syntax.

    | Performance alias syntax.
    | This is the syntax for the base names of the performance data.
    | Possible values are:

    =========== ============================================ 
    Key         Value                                        
    ----------- -------------------------------------------- 
    access      Last access time                             
    access_l    Last access time (local time)                
    access_u    Last access time (UTC)                       
    age         Seconds since file was last written          
    creation    When file was created                        
    creation_l  When file was created (local time)           
    creation_u  When file was created (UTC)                  
    file        The name of the file                         
    filename    The name of the file                         
    line_count  Number of lines in the file (text files)     
    name        The name of the file                         
    path        Path of file                                 
    size        File size                                    
    total       True if this is the total object             
    type        Type of item (file or dir)                   
    version     Windows exe/dll file version                 
    write       Alias for written                            
    written     When file was last written to                
    written_l   When file was last written  to (local time)  
    written_u   When file was last written  to (UTC)         
    =========== ============================================





.. option:: path
    :synopsis: The path to search for files under.

    | The path to search for files under.
    | Notice that specifying multiple path will create an aggregate set you will not check each path individually.In other words if one path contains an error the entire check will result in error.

.. option:: file
    :synopsis: Alias for path.

    | Alias for path.

.. option:: paths
    :synopsis: A comma separated list of paths to scan

    | A comma separated list of paths to scan

.. option:: pattern
    :synopsis: The pattern of files to search for (works like a filter but is faster and can be combined with a filter).

    | The pattern of files to search for (works like a filter but is faster and can be combined with a filter).

.. option:: max-depth
    :synopsis: Maximum depth to recurse

    | Maximum depth to recurse

.. option:: total
    :synopsis: Include the total of either (filter) all files matching the filter or (all) all files regardless of the filter

    | Include the total of either (filter) all files matching the filter or (all) all files regardless of the filter

:query:`checkdrivesize`
-----------------------
.. query:: checkdrivesize
    :synopsis: Legacy version of check_drivesize

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`CheckAll` | true | Checks all drives.
    :option:`CheckAllOthers` | true | Checks all drives turns the drive option into an exclude option.
    :option:`Drive` |  | The drives to check
    :option:`FilterType` |  | The type of drives to check fixed, remote, cdrom, ramdisk, removable
    :option:`perf-unit` |  | Force performance data to use a given unit prevents scaling which can cause problems over time in some graphing solutions.
    :option:`ShowAll` | short | Configures display format (if set shows all items not only failures, if set to long shows all cores).
    :option:`MaxWarn` |  | Maximum value before a warning is returned.
    :option:`MaxCrit` |  | Maximum value before a critical is returned.
    :option:`MinWarn` |  | Minimum value before a warning is returned.
    :option:`MinCrit` |  | Minimum value before a critical is returned.
    :option:`MaxWarnFree` |  | Maximum value before a warning is returned.
    :option:`MaxCritFree` |  | Maximum value before a critical is returned.
    :option:`MinWarnFree` |  | Minimum value before a warning is returned.
    :option:`MinCritFree` |  | Minimum value before a critical is returned.
    :option:`MaxWarnUsed` |  | Maximum value before a warning is returned.
    :option:`MaxCritUsed` |  | Maximum value before a critical is returned.
    :option:`MinWarnUsed` |  | Minimum value before a warning is returned.
    :option:`MinCritUsed` |  | Minimum value before a critical is returned.




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
    :synopsis: Checks all drives.

    | Checks all drives.

.. option:: CheckAllOthers
    :synopsis: Checks all drives turns the drive option into an exclude option.

    | Checks all drives turns the drive option into an exclude option.

.. option:: Drive
    :synopsis: The drives to check

    | The drives to check

.. option:: FilterType
    :synopsis: The type of drives to check fixed, remote, cdrom, ramdisk, removable

    | The type of drives to check fixed, remote, cdrom, ramdisk, removable

.. option:: perf-unit
    :synopsis: Force performance data to use a given unit prevents scaling which can cause problems over time in some graphing solutions.

    | Force performance data to use a given unit prevents scaling which can cause problems over time in some graphing solutions.

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

.. option:: MaxWarnFree
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: MaxCritFree
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

.. option:: MinWarnFree
    :synopsis: Minimum value before a warning is returned.

    | Minimum value before a warning is returned.

.. option:: MinCritFree
    :synopsis: Minimum value before a critical is returned.

    | Minimum value before a critical is returned.

.. option:: MaxWarnUsed
    :synopsis: Maximum value before a warning is returned.

    | Maximum value before a warning is returned.

.. option:: MaxCritUsed
    :synopsis: Maximum value before a critical is returned.

    | Maximum value before a critical is returned.

.. option:: MinWarnUsed
    :synopsis: Minimum value before a warning is returned.

    | Minimum value before a warning is returned.

.. option:: MinCritUsed
    :synopsis: Minimum value before a critical is returned.

    | Minimum value before a critical is returned.

:query:`checkfiles`
-------------------
.. query:: checkfiles
    :synopsis: Legacy version of check_drivesize

**Usage:**



.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Option", "Default Value", "Description"

    :option:`help` | N/A | Show help screen (this screen)
    :option:`help-pb` | N/A | Show help screen as a protocol buffer payload
    :option:`show-default` | N/A | Show default values for a given command
    :option:`help-short` | N/A | Show help screen (short format).
    :option:`syntax` |  | Syntax for individual items (detail-syntax).
    :option:`master-syntax` |  | Syntax for top syntax (top-syntax).
    :option:`path` |  | The file or path to check
    :option:`pattern` |  | Deprecated and ignored
    :option:`alias` |  | Deprecated and ignored
    :option:`debug` | N/A | Debug
    :option:`max-dir-depth` |  | The maximum level to recurse
    :option:`filter` |  | The filter to use when including files in the check
    :option:`warn` |  | Deprecated and ignored
    :option:`crit` |  | Deprecated and ignored
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

.. option:: syntax
    :synopsis: Syntax for individual items (detail-syntax).

    | Syntax for individual items (detail-syntax).

.. option:: master-syntax
    :synopsis: Syntax for top syntax (top-syntax).

    | Syntax for top syntax (top-syntax).

.. option:: path
    :synopsis: The file or path to check

    | The file or path to check

.. option:: pattern
    :synopsis: Deprecated and ignored

    | Deprecated and ignored

.. option:: alias
    :synopsis: Deprecated and ignored

    | Deprecated and ignored

.. option:: debug
    :synopsis: Debug

    | Debug

.. option:: max-dir-depth
    :synopsis: The maximum level to recurse

    | The maximum level to recurse

.. option:: filter
    :synopsis: The filter to use when including files in the check

    | The filter to use when including files in the check

.. option:: warn
    :synopsis: Deprecated and ignored

    | Deprecated and ignored

.. option:: crit
    :synopsis: Deprecated and ignored

    | Deprecated and ignored

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



