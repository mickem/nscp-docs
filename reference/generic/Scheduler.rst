.. default-domain:: nscp

.. module:: Scheduler
    :synopsis: Use this to schedule check commands and jobs in conjunction with for instance passive monitoring through NSCA

=================================
:module:`Scheduler` --- Scheduler
=================================
Use this to schedule check commands and jobs in conjunction with for instance passive monitoring through NSCA





**Commands (Overview)**: 

**TODO:** Add a list of all external commands (this is not check commands)

**Configuration (Overview)**:


Common Keys:

.. csv-table:: 
    :class: contentstable 
    :delim: | 
    :header: "Path / Section", "Key", "Description"

    :confpath:`/settings/scheduler` | :confkey:`~/settings/scheduler.threads` | THREAD COUNT









/ settings/ scheduler
---------------------

.. confpath:: /settings/scheduler
    :synopsis: SCHEDULER SECTION

**SCHEDULER SECTION**

    | Section for the Scheduler module.


    .. csv-table:: 
        :class: contentstable 
        :delim: | 
        :header: "Key", "Default Value", "Description"
    
        :confkey:`threads` | 5 | THREAD COUNT

    **Sample**::

        # SCHEDULER SECTION
        # Section for the Scheduler module.
        [/settings/scheduler]
        threads=5


    .. confkey:: threads
        :synopsis: THREAD COUNT

        **THREAD COUNT**

        | Number of threads to use.

        **Path**: /settings/scheduler

        **Key**: threads

        **Default value**: 5

        **Used by**: :module:`Scheduler`

        **Sample**::

            [/settings/scheduler]
            # THREAD COUNT
            threads=5




…  / schedules
--------------

.. confpath:: /settings/scheduler/schedules
    :synopsis: SCHEDULER SECTION

**SCHEDULER SECTION**

    | Section for the Scheduler module.




    **Sample**::

        # SCHEDULER SECTION
        # Section for the Scheduler module.
        [/settings/scheduler/schedules]


