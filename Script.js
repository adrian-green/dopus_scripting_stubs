/**
 * This object is provided to script add-ins when their various event handlers are invoked. It provides information relating to the script itself.
 */
class Script {
	/**
	 * <p>Returns a  {@link ScriptConfig}&nbsp;object
	 *       representing the configuration values for this script. In the <strong><a href="OnInit.htm">OnInit</a> </strong>method a script can define the
	 *       properties that make up its configuration - the user can then edit these
	 *       values in Preferences. The object returned by the <strong>config</strong>
	 *       property represents the values that the user has chosen.</p>
	 * @returns {ScriptConfig}
	 */

	config;
	/**
	 * <p>Returns the path and filename of this script.</p>
	 * @returns {string}
	 */

	file;
	/**
	 * <p>Returns a  {@link Vars}&nbsp;object that represents the
	 *       variables that are scoped to this particular script. This allows scripts
	 *       to&nbsp;use variables that persist from one invocation of the script to
	 *       another.</p>
	 * @returns {Vars}
	 */

	vars;
	/**
	 * <p>Returns <strong>True</strong> if local HTTP help is enabled (that is,
	 *       if help is shown in the user's web browser), <strong>False</strong> if the
	 *       old <em>HtmlHelp</em>-style help is enabled. If HTTP help is enabled, your
	 *       script is able to add its own help pages via the  {@link OnGetHelpContent} event,
	 *       and it can trigger the display of its own help pages using the
	 *       <strong>ShowHelp </strong>method.</p>
	 * @returns {boolean}
	 */
	HttpHelpEnabled(){}
	/**
	 * <p>If&nbsp;your script implements the <strong><a href="OnAddColumns.htm">OnAddColumns</a> </strong>event, you can call the
	 *       <strong>InitColumns</strong> method at any time&nbsp;to
	 *       reinitialize&nbsp;your columns. You may want to do this, for example, in
	 *       response to the user modifying your script's configuration.</p>
	 *
	 */
	InitColumns(){}
	/**
	 * <p>If&nbsp;your script implements the <strong> <a href="OnAddCommands.htm">OnAddCommands</a> </strong>event, you can call
	 *       the <strong>InitCommands </strong>method at any time&nbsp;to
	 *       reinitialize&nbsp;your commands. You may want to do this, for example, in
	 *       response to the user modifying your script's configuration.</p>
	 *
	 */
	InitCommands(){}
	/**
	 * <p>Using the  <!--?xml:namespace prefix = "c1" /-->{@link OnGetHelpContent} event
	 *       your script can add its own content to the F1 help. If your script is
	 *       bundled as&nbsp;a  <a href="Script_Package.htm">script package</a> you can include .html files
	 *       in a sub-directory of the package called <strong>help</strong>, and then
	 *       load them easily using this
	 *       <strong><!--?xml:namespace prefix = "c1" /--></strong>method. You can then
	 *       pass the loaded data to the <strong><a href="GetHelpContentData.htm">GetHelpContentData</a>.AddHelpPage
	 *       </strong>method to add the page.</p>
	 * @param {string} name
	 * @returns {string}
	 */
	LoadHelpFile(name){}
	/**
	 * <p>If your script is bundled as&nbsp;a  <a href="Script_Package.htm">script package</a> you can include PNG and JPG
	 *       image files in a sub-directory of the package called
	 *       <strong>help</strong>, and then load them easily using this <strong><!--?xml:namespace prefix = "c1" /--></strong>method. You can then
	 *       pass the loaded data to the <strong> <a href="GetHelpContentData.htm">GetHelpContentData</a>.AddHelpImage
	 *       </strong>method to add the image.</p>
	 * @param {string} name
	 * @returns {Blob}
	 */
	LoadHelpImage(name){}
	/**
	 * <p>Loads an image file from the specified external file. If your script is
	 *       bundled as&nbsp;a  <!--?xml:namespace prefix = "c1" /--><a href="Script_Package.htm">script package</a> you can place image files in
	 *       a sub-directory of the package called <strong>images</strong> and then
	 *       load them from your script by giving their name. You can optionally
	 *       specify the desired size to load the image at, and whether the alpha
	 *       channel (if any) should be loaded or not.<br>&nbsp;</p>
	 *       <p>The returned  {@link Image}&nbsp;object can be&nbsp;given
	 *       as the value&nbsp;of the <strong><!--?xml:namespace prefix = "c1" /--><a href="Control.htm">Control</a>.label</strong> property for a static
	 *       control in a <a href="Script_Dialogs1.htm">script dialog</a> (when that
	 *       control is in "image" mode). You can also assign&nbsp;as to the
	 *       <strong>icon </strong>property of a <strong><a href="Dialog.htm">Dialog</a> </strong>object to specify a custom window
	 *       icon for your script dialog.</p>
	 * @param {string} name
	 * @param {int} [width]
	 * @param {int} [height]
	 * @param {boolean} [alpha]
	 * @returns {Image}
	 */
	LoadImage(name, width, height, alpha){}
	/**
	 * <p>Loads external <a href="Resources.htm">script resources</a> and makes
	 *       them available to the script. You can either provide a filename or a raw
	 *       XML string. If your script is bundled as a <a href="Script_Package.htm">script package</a>, the resource file must have
	 *       a <strong>.odxml</strong> extension for <strong>LoadResources</strong> to
	 *       be able to find it in the package.</p>
	 * @param {string} name
	 * @param { or} or
	 * @param {string} XML
	 *
	 */
	LoadResources(name, or, XML){}
	/**
	 * <p>If your script implements any custom columns, you can use this method
	 *       to cause them to be regenerated if they are currently shown in any tabs.
	 *       You may want to do this, for example, in response to the user modifying
	 *       your script's configuration. Pass the name of the column you want to
	 *       regenerate as the argument to this method.</p>
	 * @param {string} name
	 *
	 */
	RefreshColumn(name){}
	/**
	 * <p>If your script adds its own help pages via the <strong><a href="OnGetHelpContent.htm">OnGetHelpContent</a> </strong>event, and the
	 *       user has http help enabled, you can call this method to display your help
	 *       in the user's web browser. You might want to do this when the user clicks
	 *       a <strong>Help </strong>button in your <a href="Script_Dialogs1.htm">script dialog</a>, for example. You can use the
	 *       <strong>HttpHelpEnabled </strong>method to check if http help is enabled
	 *       before calling this function.<br><br>The optional parameter must be the
	 *       name of the desired page to show, which corresponds to the name you
	 *       supplied when you added it in the  {@link OnGetHelpContent} event
	 *       handler. If you omit this parameter then your first help page will be
	 *       shown.</p>
	 * @param {string} page
	 *
	 */
	ShowHelp(page){}
} //end class

