#######
# NSCPIPC #

## Common ##

<dl>
  <dt>    .. py : attribute :  : Version</dt>
  <dd>
    <p>.. py:attribute:: Version</p>
    <p></p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>VERSION_1                 1</p>
    <p>========================= =====</p>
    <p>.. py:attribute:: MessageTypes</p>
    <p></p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>QUERY_REQUEST             1</p>
    <p>QUERY_RESPONSE            2</p>
    <p>EXEC_REQUEST              3</p>
    <p>EXEC_RESPONSE             4</p>
    <p>SUBMIT_REQUEST            5</p>
    <p>SUBMIT_RESPONSE           6</p>
    <p>SETTINGS_REQUEST          10</p>
    <p>SETTINGS_RESPONSE         11</p>
    <p>REGISTRY_REQUEST          12</p>
    <p>REGISTRY_RESPONSE         13</p>
    <p>ERROR_MESSAGE             99</p>
    <p>CUSTOM_MESSAGE            100</p>
    <p>========================= =====</p>
    <p>**Nested messages**</p>
    <p>* :py:class:`NSCPIPC.Common.Header`</p>
  </dd>
</dl>
### Header ###

<dl>
  <dt>    .. py : attribute :  : version</dt>
  <dd>
    <p>.. py:attribute:: version</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: cookie</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: sequence</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## HeaderMessage ##

<dl>
  <dt>    .. py : attribute :  : header</dt>
  <dd>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: custom_type</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: message</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## PayloadMessage ##

<dl>
  <dt>    .. py : attribute :  : header</dt>
  <dd>
    <p>.. py:attribute:: header</p>
    <p></p>
    <p>A **required** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: type</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: message</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
## ErrorMessage ##

<dl>
  <dt>    .. py : attribute :  : error</dt>
  <dd>
    <p>.. py:attribute:: error</p>
    <p></p>
    <p>A **repeated** value of type **message**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: sender</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: recipient</p>
    <p></p>
    <p>A **optional** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: request_id</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>**Nested messages**</p>
    <p>* :py:class:`NSCPIPC.ErrorMessage.Message`</p>
  </dd>
</dl>
### Message ###

<dl>
  <dt>    .. py : attribute :  : Severity</dt>
  <dd>
    <p>.. py:attribute:: Severity</p>
    <p></p>
    <p>========================= =====</p>
    <p>Possible values           Id</p>
    <p>========================= =====</p>
    <p>IS_OK                     1</p>
    <p>HAS_WARNINGS              5</p>
    <p>IS_WARNING                6</p>
    <p>HAS_ERRRORS               7</p>
    <p>IS_ERRROR                 8</p>
    <p>IS_FATAL                  10</p>
    <p>========================= =====</p>
    <p>.. py:attribute:: line</p>
    <p></p>
    <p>A **optional** value of type **int32**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: date</p>
    <p></p>
    <p>A **optional** value of type **int64**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: severity</p>
    <p></p>
    <p>A **required** value of type **enum**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: message</p>
    <p></p>
    <p>A **required** value of type **string**</p>
    <p></p>
    <p></p>
    <p>.. py:attribute:: details</p>
    <p></p>
    <p>A **repeated** value of type **string**</p>
    <p></p>
    <p></p>
  </dd>
</dl>
