(function() {
  'use strict';

  var all_versions = {
    '0.5.0': 'dev (0.5.0)',
    '0.4.4': 'stable (0.4.4)',
    '0.4.3': 'stable (0.4.3)',
    '0.4.2': 'legacy (0.4.2)',
  };

  function build_select(current_version) {
    var buf = ['<select>'];

    $.each(all_versions, function(version, title) {
      buf.push('<option value="' + version + '"');
      if (version == current_version)
        buf.push(' selected="selected">' + title + '</option>');
      else
        buf.push('>' + title + '</option>');
    });

    buf.push('</select>');
    return buf.join('');
  }

  function patch_url(url, new_version) {
    var url_re = /\.org\/(\d|dev|((release\/)?\d\.\d[\w\d\.]*))\//,
        new_url = url.replace(url_re, '.org/' + new_version + '/');
    if (new_url == url && !new_url.match(url_re)) {
      new_url = url.replace(/\.org\//, '.org/' + new_version + '/');
    }
    return new_url;
  }

  function on_switch() {
    var selected = $(this).children('option:selected').attr('value');

    var url = window.location.href,
        new_url = patch_url(url, selected);

    if (new_url != url) {
      // check beforehand if url exists, else redirect to version's start page
      $.ajax({
        url: new_url,
        success: function() {
           window.location.href = new_url;
        },
        error: function() {
           window.location.href = 'http://docs.nsclient.org/' + selected;
        }
      });
    }
  }

  $(document).ready(function() {
    var select = build_select(DOCUMENTATION_OPTIONS.VERSION);

    $('.version_switcher_placeholder').html(select);
    $('.version_switcher_placeholder select').bind('change', on_switch);
  });
})();
