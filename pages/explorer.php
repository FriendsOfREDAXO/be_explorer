<?php

  
  // $fragment = new rex_fragment();
  // $fragment->setVar('title', $this->i18n('be_explorer_subpage_explorer'), false);
  // $fragment->setVar('body', $tiny, false);
  // $fragment->setVar('footer', $footer, false);
  // $content = $fragment->parse('core/page/section.php');



  // echo $content;
  ?>
  <section class="rex-page-section">
    <div class="panel panel-default">

      <header class="panel-heading">
        <div class="panel-title"><?=$this->i18n('be_explorer_explorer')?></div>
      </header>
      <div class="panel-body">
        <?php 
          $path = rex_addon::get('be_explorer')->getPath();
          $fm = $path . 'fragments/tiny.php';
          include $fm;
        ?>
      </div>
    </div>
  </section>