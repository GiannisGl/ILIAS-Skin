## Instructions to use and change the skin locally:
1. install ilias with the instructions from https://www.ilias.de/docu/goto.php?target=lm_367&client_id=docu#manual-installation-on-linux
2. clone this repo in ILIAS/Customizing/global/skin/unibe52/
3. change lines 1580-1581 from Services/UICore/classes/ilTemplate.php with the following patch from Timon Amstutz from ILUB:
    + $style = ilStyleDefinition::getCurrentStyle();
    +
      $fname = "./Customizing/global/skin/".
    - ilStyleDefinition::getCurrentSkin()."/".$module_path.basename($a_tplname);
    + ilStyleDefinition::getCurrentSkin()."/".$style."/".$module_path
    + .basename($a_tplname);
    +
    + if($fname == "" || !file_exists($fname))
    + {
    + $fname = "./Customizing/global/skin/".
    + ilStyleDefinition::getCurrentSkin()."/".$module_path.basename($a_tplname);
    + }
    +
      } 
4. enable management of styles in admin menu
5. enable style in the desired category