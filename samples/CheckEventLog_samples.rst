

Realtime monitoring
-------------------

Setting up real time monitoring can be a bit daunting for first time users.
But it is not as difficult as it might seem.

The basic idea is depict in the following figure.


We have a filter which listens to event log entries.
These entries are (when they matched) turned into messages and statuses which is then sent onward to various channels.
On the other end of these channels are (hopefully) someone who is interested in the message.

In most cases the first channel you are interested in is NSCA which is the default name where the NSCACLient listenes.
It will in turn foirward all incoming messages on to Nagios via NSCA.

So in short we need to configure three things
# Activate real time filtering
# Add a filter which listenes for events
# Setup a destination

Enabling realtime filtering
===========================

To setup real time filtering we only need a single flag (as well as the eventlog module).

configuration::
  
  [/mnodules]
  ChecEventLog=enabled
  
  [/.../]
  realtime = enabled

Adding this will not do much since we dont have a filter yet but adding one is prettyb simple as well so lets gon ahead and do that.

configuration::
  
  [/...]

If we were to test this (and please do go ahead) we would start getting warning on the concole about no one listening to our events.

But noe we wnd up in a strange situation, how can we actually test this configuration?
How can we generate messages in the windows eventlog?
Fortunetly NSClient++ can help us there as well.

execute the following to inser an error into the everntlog::
  
  ...
  
