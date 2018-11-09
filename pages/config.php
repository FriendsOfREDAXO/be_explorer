<?php


/** @var rex_addon $this */

if (rex_post('config-submit', 'boolean')) {
    $this->setConfig(rex_post('config', [
        ['show_tree_view', 'bool'],
        ['show_hidden_files', 'bool'],
    ]));

    echo rex_view::success($this->i18n('be_explorer-saved'));
}

$content = '<fieldset>';

$formElements = [];

$n = [];
$n['label'] = '<label for="be_explorer-show_tree_view">' . $this->i18n('be_explorer_config_show_tree_view') . '</label>';
$n['field'] = '<input type="checkbox" id="be_explorer-show_tree_view" name="config[show_tree_view]" value="1" ' . ($this->getConfig('show_tree_view') ? ' checked="checked"' : '') . ' />';
$formElements[] = $n;

$n = [];
$n['label'] = '<label for="be_explorer-show_hidden_files">' . $this->i18n('be_explorer_config_show_hidden_files') . '</label>';
$n['field'] = '<input type="checkbox" id="be_explorer-show_hidden_files" name="config[show_hidden_files]" value="1" ' . ($this->getConfig('show_hidden_files') ? ' checked="checked"' : '') . ' />';
$formElements[] = $n;

$fragment = new rex_fragment();
$fragment->setVar('elements', $formElements, false);
$content .= $fragment->parse('core/form/checkbox.php');

$formElements = [];

$n = [];
$n['field'] = '<button class="btn btn-save rex-form-aligned" type="submit" name="config-submit" value="1" ' . rex::getAccesskey($this->i18n('save'), 'save') . '>' . $this->i18n('save') . '</button>';
$formElements[] = $n;

$fragment = new rex_fragment();
$fragment->setVar('flush', true);
$fragment->setVar('elements', $formElements, false);
$buttons = $fragment->parse('core/form/submit.php');

$fragment = new rex_fragment();
$fragment->setVar('class', 'edit');
$fragment->setVar('title', $this->i18n('be_explorer_config'));
$fragment->setVar('body', $content, false);
$fragment->setVar('buttons', $buttons, false);
$content = $fragment->parse('core/page/section.php');

echo '
    <form action="' . rex_url::currentBackendPage() . '" method="post">
        ' . $content . '
    </form>';
