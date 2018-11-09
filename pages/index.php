<?php

/**
 * Media Manager Addon.
 *
 * @author office[at]vscope[dot]at Wolfgang Hutteger
 * @author markus.staab[at]redaxo[dot]de Markus Staab
 * @author jan.kristinus[at]yakmara[dot]de Jan Kristinus
 * @author dh[at]daveholloway[dot]co[dot]uk Dave Holloway
 *
 * @package redaxo5
 */

echo rex_view::title(rex_i18n::msg('be_explorer_title'));

rex_be_controller::includeCurrentPageSubPath();
