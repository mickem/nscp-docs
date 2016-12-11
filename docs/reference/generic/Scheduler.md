# Scheduler

Use this to schedule check commands and jobs in conjunction with for instance passive monitoring through NSCA





## Command list

**TODO:** Add a list of all external commands (this is not check commands)

## Configuration list


Common Keys:

| Path / Section | Key | Description|
| -------------- | --- | -----------|
| [/settings/scheduler](#/settings/scheduler) | [threads](#/settings/scheduler_threads) | THREAD COUNT|







# Configuration



## /settings/scheduler

`/settings/scheduler`

**SCHEDULER SECTION**

Section for the Scheduler module.


| Key | Default Value | Description|
| --- | ------------- | -----------|
| [threads](#/settings/scheduler_threads) | 5 | THREAD COUNT|


**Sample**::

```
# SCHEDULER SECTION
# Section for the Scheduler module.
[/settings/scheduler]
threads=5

```


<a name="/settings/scheduler_threads"/>
### threads

**THREAD COUNT**

Number of threads to use.

**Path**: /settings/scheduler

**Key**: threads

**Default value**: 5

**Used by**: :module:`Scheduler`

**Sample**::

```
[/settings/scheduler]
# THREAD COUNT
threads=5
```




## /settings/scheduler/schedules

`/settings/scheduler/schedules`

**SCHEDULER SECTION**

Section for the Scheduler module.




**Sample**::

```
# SCHEDULER SECTION
# Section for the Scheduler module.
[/settings/scheduler/schedules]

```


