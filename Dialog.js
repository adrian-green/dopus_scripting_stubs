class Dialog {
	/**
	 * <p>Specifies the buttons that are displayed at the bottom of&nbsp;the
	 *       dialog. These buttons are used to close the dialog.&nbsp;The
	 *       <strong>Show</strong> method returns a value indicating which button was
	 *       chosen (and this value is also available in the <strong>result</strong>
	 *       property).</p>
	 *       <p>Multiple button strings must be separated with vertical bar characters
	 *       (|). If a button has more than one button then by definition the last one
	 *       is the "cancel" button. For example:</p>
	 *       <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">dlg.buttons =
	 *       "OK|Retry|Cancel"</span><br><br>To specify <em>accelerators </em>for the
	 *       buttons prefix the desired key with an ampersand (&amp;) character. For
	 *       example:</p>
	 *       <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">dlg.buttons =
	 *       "&amp;OK|&amp;Retry|&amp;Cancel"</span><br><br>Buttons can also have
	 *       drop-down menus attached to them, by separating the drop-down items with
	 *       plus signs (+). For example:</p>
	 *       <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">dlg.buttons =
	 *       "OK|Retry+Retry All|Cancel"</span><br><br>Within drop-down menus, you can
	 *       specify that certain menu items can be accessed directly from the main
	 *       button by holding Shift, Ctrl or Shift+Ctrl. This is done by adding an
	 *       equals sign (=) and then the label the button should display when the key
	 *       is held down (usually an abbreviated version of the menu item label, or a
	 *       repetition of the label itself if it is already short enough). The keys
	 *       are automatically assigned and you can only do this for at most three
	 *       items. For example:</p>
	 *       <p><span style="FONT-SIZE: 10pt; FONT-FAMILY: Courier New">dlg.buttons =
	 *       "OK|Retry+Retry All=Retry All|Skip+Skip if same modified time=Skip Same
	 *       Time|Cancel"</span><br></p>
	 * @returns {string}
	 */

	buttons;
	/**
	 * <p>This property uses either a  {@link Vector}or an array of strings to
	 *       provide a list of multiple options that can be shown to the user. The list
	 *       can be&nbsp;presented in one of three ways:</p>
	 *       <ul>
	 *         <li><strong>Drop-down list</strong>: By default, the dialog will display
	 *         a drop-down list allowing the user to select one option. The index of
	 *         the chosen selection is available via the <strong>selection</strong>
	 *         property when the <strong>Show</strong> method returns.
	 *         </li><li><strong>Checkbox list</strong>: If the <strong>list</strong>
	 *         property is also given the dialog will display a scrolling list of
	 *         items, each with a checkbox allowing it to be turned on or off.
	 *         </li><li><strong>Popup menu</strong>: If the <strong>menu</strong> property
	 *         is also given, a popup menu will be displayed at the current mouse
	 *         coordinates. Use a single hyphen ("-") as a menu label to insert a
	 *         separator.<br>&nbsp; </li></ul>
	 *       <p>When shown as a checkbox list the dialog is resizable; you can set the
	 *       initial size using the <strong>cx</strong> and <strong>cy</strong>
	 *       properties (and retrieve them afterwards if you want to save the
	 *     size).</p>
	 * @returns {Vector|string[]}
	 */

	choices;
	/**
	 * <p>In a text entry dialog (i.e. the <strong>max</strong> property has been
	 *       specified) setting <strong>confirm</strong> to <strong>True</strong> will
	 *       require that the user types the entered text again (in a second text
	 *       field) to confirm it (e.g. for a password).</p>
	 * @returns {boolean}
	 */

	confirm;
	/**
	 * <p>For <a href="Script_Dialogs1.htm">script dialogs</a> marked as
	 *       resizable, this property lets you override the width of the dialog defined
	 *       in the resource - although note you can't resize a dialog smaller than its
	 *       initial size.</p>
	 * @returns {int}
	 */

	cx;
	/**
	 * <p>For <a href="Script_Dialogs1.htm">script dialogs</a>&nbsp;marked as
	 *       resizable, this property lets you override the height of the dialog
	 *       defined in the resource - although note you can't resize a dialog smaller
	 *       than its initial size.</p>
	 * @returns {int}
	 */

	cy;
	/**
	 * <p>In a text entry dialog (i.e. the <strong>max</strong> property has been
	 *       specified) this property allows you to initialize the text field with a
	 *       default value.</p>
	 *       <p>(Old scripts may use "default" instead of "defvalue"; this is
	 *       deprecated because it does not work in JScript where "default" is a
	 *       reserved keyword.)</p>
	 * @returns {string}
	 */

	defvalue;
	/**
	 * <p>Allows you to&nbsp;change the default button (i.e. the action that will
	 *       occur if the user hits enter) in the dialog. Normally the first button is
	 *       the default - this has a <strong>defid</strong> of 1. The second button
	 *       would have a <strong>defid</strong> of 2, and so on. If a dialog has more
	 *       than one button then by definition the very last button is the "cancel"
	 *       button, and this has a <strong>defid</strong> of 0.</p>
	 * @returns {int}
	 */

	defid;
	/**
	 * <p>Set to <strong>True </strong>if you want a <a href="Script_Dialogs1.htm">script dialog</a> to run in “detached” mode,
	 *       where your script provides its <a href="The_Dialog_Message_Loop.htm">message loop</a>.</p>
	 * @returns {boolean}
	 */

	detach;
	/**
	 * <p>Use this to cause the dialog to automatically disable another window
	 *       when it's displayed. The user will be unable to click or type in the
	 *       disabled window until the dialog is closed. Normally if you use this you
	 *       would set this to the same value as the <strong>window
	 *       </strong>property.<br><br>You can provide either a <!--?xml:namespace prefix = "c1" /--><a href="Lister.htm"><strong>Lister
	 *       </strong></a>or a  {@link Tab}&nbsp;object, or another
	 *       <strong>Dialog</strong>. If you are showing this dialog in response to the
	 *       <strong><a href="OnAboutScript.htm">OnAboutScript</a> </strong>event, you
	 *       can also pass the value of the <strong><a href="AboutData.htm">AboutData</a>.window </strong>property.</p>
	 * @returns {Lister|Tab|Dialog|int}
	 */

	disable_window;
	/**
	 * <p>Displays one of several standard icons in the top-left corner of the
	 *       dialog, which can be used, for example,&nbsp;to indicate the severity of
	 *       an error condition. The valid values for this property are
	 *       <em>warning</em>, <em>error</em>, <em>info</em> and <em>question</em>.</p>
	 *       <p><br>When used with a <a href="Script_Dialogs1.htm">script dialog</a>
	 *       this property lets you control the icon shown in the dialog's title bar.
	 *       In this instance, instead of a string you can also provide an   {@link Image}&nbsp;object that you obtained
	 *       from the <strong><a href="DOpus.htm">DOpus</a>.LoadImage </strong>or
	 *       <strong><a href="Script.htm">Script</a>.LoadImage </strong>methods. Note
	 *       that the image must have been loaded from a <strong>.ico</strong>
	 *     file.</p>
	 * @returns {string|Image}
	 */

	icon;
	/**
	 * <p>In a text entry dialog, this property returns the text string that the
	 *       user entered (i.e. once the <strong>Show</strong> method has
	 *     returned).</p>
	 * @returns {string}
	 */

	input;
	/**
	 * <p>Set this property to create a <a href="Script_Dialogs1.htm">script
	 *       dialog</a> in a particular language (if one or more <a href="Language_Overlays.htm">language overlays</a> have been provided),
	 *       rather than the currently selected language.</p>
	 * @returns {string}
	 */

	language;
	/**
	 * <p>In conjunction with the <strong>choices </strong>property, this will
	 *       cause the choices to be presented as a checkbox list. You can initialize
	 *       this <strong>Vector</strong> or array with the same number of items as the
	 *       choices property, and set each one to <strong>True</strong> or
	 *       <strong>False</strong> to control the default state of each checkbox. Or,
	 *       simply set this value to<strong> 0</strong> to activate the checkbox list
	 *       without having to initialize the state of each checkbox.<br><br>When the
	 *       <strong>Show</strong> method returns, this property will return a   {@link Vector}of <em>bools</em> that
	 *       provide the state of each checkbox as set by the user.</p>
	 * @returns {Vector|boolean|int}
	 */

	list;
	/**
	 * <p>This property enables text entry in the dialog - a text field will be
	 *       displayed allowing the user to enter a string. Set this property to the
	 *       maximum length of the string you want the user to be able to enter (or
	 *       <strong>0</strong> to have no limit).<br><br>When the
	 *       <strong>Show</strong> method returns the text the user entered will be
	 *       available in the <strong>input</strong> property.</p>
	 * @returns {int}
	 */

	max;
	/**
	 * <p>In conjunction with the <strong>choices</strong> property, this will
	 *       cause the choices to be presented as a popup menu rather than in a dialog.
	 *       The menu will be displayed at the current mouse coordinates.</p>
	 *       <p>You can initialize this <strong>Vector</strong> or array with the same
	 *       number of items as the choices property, and set each one to a value
	 *       representing various flags that control the appearance of the menu item.
	 *       The available flags are as follows - their values must be added together
	 *       if you need to specify more than one flag per item.</p>
	 *       <p><strong>1</strong> - bold (indicates the default
	 *       item)<br><strong>2</strong> - checked (a checkmark will appear next to the
	 *       item)<br><strong>4</strong> - radio (a radio button will appear next to
	 *       the item)<br><strong>8</strong> - disabled (the user will not be able to
	 *       select the item)</p>
	 *       <p>You can also simply set this value to <strong>0</strong> or
	 *       <strong>1</strong> to activate the popup menu without having to provide
	 *       flags for each item (if set to <strong>1</strong>, the top item in the
	 *       menu will appear bolded).</p>
	 *       <p><br>The <strong>Show</strong> method returns the index of the menu item
	 *       the user chose (with <strong>1</strong> being the first item), or
	 *       <strong>0</strong> if the menu was cancelled.</p>
	 * @returns {Vector|array(int)|int}
	 */

	menu;
	/**
	 * <p>Specifies the message text displayed in the dialog.</p>
	 * @returns {string}
	 */

	message;
	/**
	 * <p>For <!--?xml:namespace prefix = "c1" /--><a href="Script_Dialogs1.htm">script dialogs</a>&nbsp;this&nbsp;property
	 *       retrieves or sets the current dialog opacity level, from
	 *       <strong>0</strong> (totally transparent) to <strong>255</strong> (totally
	 *       opaque).</p>
	 * @returns {int}
	 */

	opacity;
	/**
	 * <p>This is a collection of five options that will be displayed as
	 *       checkboxes in the dialog. Unlike the <strong>choices</strong> /
	 *       <strong>list</strong> scrolling checkbox list, these options are displayed
	 *       as physical checkbox controls. By default the five checkboxes are
	 *       uninitialized and won't be displayed, but if you assign a label to any of
	 *       them they will be shown to the user.<br>&nbsp;</p>
	 *       <p>When the <strong>Show</strong> method returns you can obtain the state
	 *       of the checkboxes using the <strong>state</strong> property of each  {@link DialogOption}&nbsp;object.</p>
	 * @returns {DialogOption[]}
	 */

	options;
	/**
	 * <p>In a text entry dialog, set this property to <strong>True</strong> to
	 *       make the text entry field a password field. In a password field the
	 *       characters the user enters are not displayed.</p>
	 * @returns {boolean}
	 */

	password;
	/**
	 * <p>When used with a <a href="Script_Dialogs1.htm">script
	 *       dialog</a>&nbsp;this property lets you control the dialog's position on
	 *       screen. Accepted values are:</p>
	 *       <blockquote>
	 *         <p><strong>center</strong> - center the dialog over the parent window
	 *         (the default)</p>
	 *         <p><strong>absolute</strong> - specify an absolute position using the
	 *         <strong>x</strong> and <strong>y</strong> properties</p>
	 *         <p><strong>parent</strong> - position relative to the parent window
	 *         (using&nbsp;<strong>x</strong> and <strong>y</strong>)</p>
	 *         <p><strong>monitor</strong> - position relative to the current monitor
	 *         (using <strong>x</strong> and <strong>y</strong>)</p></blockquote>
	 *       <p>Except when set to "center" the <strong>x</strong> and
	 *       <strong>y</strong> properties&nbsp;can be used to adjust the dialog's
	 *       position.&nbsp;</p>
	 * @returns {string}
	 */

	position;
	/**
	 * <p>By default, Opus checks the size and position of your dialog just
	 *       before it opens and fixing them if they would place any of the dialog
	 *       off-screen. Positioning a dialog off-screen is usually an accident caused
	 *       by saving window positions on one system and restoring them on another
	 *       with different monitor resolutions or arrangements. In the rare cases
	 *       where you want your dialog to open off-screen, where the user cannot see
	 *       some of all of it, set this property to <strong>False</strong>.</p>
	 * @returns {boolean}
	 */

	position_fix;
	/**
	 * <p>This property returns the index of the button chosen by the user to
	 *       close the dialog. The left-most button is index <strong>1</strong>, the
	 *       next button is index <strong>2</strong>, and so on. If a dialog has more
	 *       than one button then by definition the last (right-most) button is the
	 *       "cancel" button and so this will return index
	 *       <strong>0</strong>.<br><br>If any buttons have associated drop-down menus
	 *       then the contents of the menus also contribute to the index value. For
	 *       example, if button index 2 has an additional item in a drop-down menu,
	 *       then that item would be index 3, and the next button would be index
	 *     4.</p>
	 * @returns {int}
	 */

	result;
	/**
	 * <p>In a text entry dialog, set this property to <strong>True</strong> to
	 *       automatically select the contents of the input field (as specified by the
	 *       <strong>defvalue</strong> property) when the dialog opens.</p>
	 * @returns {boolean}
	 */

	select;
	/**
	 * <p>In a drop-down list dialog (one with the <strong>choices</strong>
	 *       property set without either <strong>list</strong> or
	 *       <strong>menu</strong>), this property returns the index of the item chosen
	 *       from the drop-down list after the <strong>Show</strong> method
	 *     returns.</p>
	 * @returns {int}
	 */

	selection;
	/**
	 * <p>Set this property to <strong>True</strong> if the list of choices given
	 *       by the <strong>choices</strong> property should be sorted
	 *       alphabetically.</p>
	 * @returns {boolean}
	 */

	sort;
	/**
	 * <p>Lets you create a <a href="Script_Dialogs1.htm">script dialog</a>. The
	 *       <strong>template</strong> property can be set to the name of the script
	 *       dialog to display (as defined in your script resources), or a string that
	 *       contains raw XML defining the dialog.</p>
	 * @returns {string}
	 */

	template;
	/**
	 * <p>Specifies the title text of the dialog.</p>
	 * @returns {string}
	 */

	title;
	/**
	 * <p>Set this property to <strong>True</strong> to make the dialog "top
	 *       level", or <strong>False</strong> to allow it to go behind other non-top
	 *       level windows.</p>
	 * @returns {boolean}
	 */

	top;
	/**
	 * <p>Set this property to <strong>True </strong>if you want the script
	 *       dialog to generate close events in your message loop when the user clicks
	 *       the window close button. You'll need to close the dialog yourself using
	 *       the <strong>EndDlg </strong>method.</p>
	 * @returns {boolean}
	 */

	want_close;
	/**
	 * <p>Set this property to <strong>True</strong> if you want the script
	 *       dialog to generate <strong>resize</strong> events in your message loop
	 *       when the user resizes the dialog.</p>
	 * @returns {boolean}
	 */

	want_resize;
	/**
	 * <p>Use this to specify the parent window of the dialog. The dialog will
	 *       appear centered over the top of the specified window. You can provide
	 *       either a {@link Tab}&nbsp;object, or another
	 *       <strong>Dialog</strong>. If you are showing this dialog in response to the
	 *       <strong><a href="OnAboutScript.htm">OnAboutScript</a> </strong>event, you
	 *       can also pass the value of the <strong><a href="AboutData.htm">AboutData</a>.window </strong>property.<br><br>You
	 *       only need to set this property if you obtain the <strong>Dialog
	 *       </strong>option from the <strong><a href="DOpus.htm">DOpus</a>.Dlg
	 *       </strong>method. If the <strong>Dialog</strong> object comes from one of
	 *       the other objects (e.g. <strong><a href="Tab.htm">Tab</a>.Dlg</strong>)
	 *       then its parent window will already be set to the window which launched
	 *       the action your script is responding to.</p>
	 * @returns {Lister|Tab|Dialog|int}
	 */

	window;
	/**
	 * <p>Specifies the x-position of a <!--?xml:namespace prefix = "c1" /--><a href="Script_Dialogs1.htm">script dialog</a>. Use the
	 *       <strong>position</strong> property to control how the position is
	 *       interpreted. After the dialog has been displayed&nbsp;you can change this
	 *       property to move the dialog around on-screen.</p>
	 * @returns {int}
	 */

	x;
	/**
	 * <p>Specifies the y-position of a <!--?xml:namespace prefix = "c1" /--> <a href="Script_Dialogs1.htm">script dialog</a>. Use the
	 *       <strong>position</strong> property to control how the position is
	 *       interpreted. After the dialog has been displayed&nbsp;you can change this
	 *       property to move the dialog around on-screen.</p>
	 * @returns {int}
	 */

	y;

	/**
	 * <p>Creates a hotkey (or keyboard accelerator) for the specified key
	 *       combination. When the user presses this key combination in your dialog, a
	 *       <strong>hotkey</strong> event will be triggered.</p>
	 *       <p><br>The name parameter is a name you assign that lets you identify the
	 *       hotkey. The key parameter specified the actual key combination; this can
	 *       optionally&nbsp;combine the qualifiers <strong>ctrl</strong>,
	 *       <strong>shift</strong> and <strong>alt</strong> with a character or name
	 *       of a special key. For example, <strong>ctrl+t</strong> or
	 *       <strong>alt+shift+F7</strong>.</p>
	 * @param {string} name
	 * @param {string} key
	 *
	 */
	AddHotkey(name, key) {
	}

	/**
	 * <p>When creating a <a href="Script_Dialogs1.htm">script dialog</a>,
	 *       calling this method creates the underlying dialog but does not display it.
	 *       This lets you create the dialog and then initialize its controls before it
	 *       is shown to the user.</p>
	 *       <p>Using <strong>Create</strong> implies a <a href="Detached_Dialogs.htm">detached dialog</a>; the
	 *       <strong>detach</strong> property will be set <strong>True</strong>
	 *       automatically. However, you can call <strong>RunDlg</strong> afterwards if
	 *       you don't need a custom message loop and just want to set up some controls
	 *       before displaying the dialog.</p>
	 *       <p>Once the dialog has been created and its controls initialized, you
	 *       should call <strong>Show</strong> or <strong>RunDlg</strong> to make it
	 *       visible to the user. It will also go visible at the first
	 *       <strong>GetMsg</strong> call if it hasn't already been shown.</p>
	 *
	 */
	Create() {
	}

	/**
	 * <p>Returns a  {@link Control}&nbsp;object corresponding
	 *       to one of the controls on a script dialog. The control is identified by
	 *       its <em>name</em>, as defined in the script dialog resource.<br>&nbsp;</p>
	 *       <p>The optional second and third parameters are only used when the control
	 *       is in a <em>tab control</em>&nbsp;(that is, when it's in a dialog that's a
	 *       child of another dialog). The <em>dialog</em> parameter specifies the name
	 *       of its parent dialog. The <em>tab</em> parameter specifies the name of the
	 *       tab control hosting the child dialog. You would only need to specify the
	 *       name of the tab if you have multiple tab controls and the same dialog is
	 *       hosted inside more than one of them (this would be quite a rare
	 *       occurrence).</p>
	 *       <p>Note that none of the controls will exist until <strong>Create</strong>
	 *       has been called.</p>
	 * @param {string} name
	 * @param {string} [dialog]
	 * @param {string} [tab]
	 * @returns {Control}
	 */
	Control(name, dialog, tab) {
	}

	/**
	 * <p>Deletes a hotkey you previously created&nbsp;with the
	 *       <strong>AddHotkey</strong> method.</p>
	 * @param {string} name
	 *
	 */
	DelHotkey(name) {
	}

	/**
	 * <p>Allows the user to drag and drop one or more files from your dialog
	 *       (and drop them in another window or application).</p>
	 *       <p>You would usually call this in response to a <strong>drag</strong>
	 *       event you receive from a <strong>static</strong> or list view control.</p>
	 *       <p>The first parameter is an&nbsp; <!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;objects) representing the
	 *       files to be dragged.</p>
	 *       <p>The optional second parameter lets you control which actions are
	 *       available. This should be a string containing one or more of
	 *       <strong>copy</strong>, <strong>move</strong>, <strong>link</strong>. The
	 *       default action can be indicated by prefixing it with a * (e.g.
	 *       <strong>copy,*move,link</strong>). If you don't specify this parameter the
	 *       default is to only allow <strong>copy</strong>.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The string this method returns indicates the result of the drag. For a
	 *       left button drag, this will be "copy", "move", "link" or "drop". For a
	 *       right-button drag it will always be "drop". If the drag is cancelled it
	 *       will return "cancel".</p>
	 * @param {Item[]} item
	 * @param {string} actions
	 * @returns {string}
	 */
	Drag(item, actions) {
	}

	/**
	 * <p>Ends a <a href="Script_Dialogs1.htm">script dialog</a> running in
	 *       detached mode. Normally dialogs end automatically when the user clicks the
	 *       close button or another button that has its <strong>Close Dialog
	 *       </strong>property set to <strong>True</strong>. This method lets you end a
	 *       dialog under script control. The optional parameter specifies the result
	 *       code that the <strong>Dialog.result </strong>property will
	 *   return.</p>
	 * @param {int} result
	 *
	 */
	EndDlg(result) {
	}

	/**
	 * <p>Displays a "Browse for Folder" dialog letting the user select a folder.
	 *       The optional parameters are:</p>
	 *       <p><em>title</em> - specify title of the dialog<br><em>default</em> -
	 *       specify the default path selected in the dialog<br><em>expand</em> -
	 *       specify <strong>True</strong> to automatically expand the initial
	 *       path<br><em>window</em> - specify parent window for the dialog (a {@link Tab}). If not specified, the
	 *       <strong>Dialog</strong> object's <strong>window</strong> property will be
	 *       used.<br><br></p>
	 *       <p>A  {@link Path}&nbsp;object is returned to
	 *       indicate the&nbsp;folder chosen by the user. This object will have an
	 *       additional <strong>result</strong> property that will be
	 *       <strong>False</strong> if the user cancelled the dialog - the other normal
	 *       <strong>Path</strong> properties will only be valid if
	 *       <strong>result</strong> is <strong>True</strong>.</p>
	 * @param {string} title
	 * @param {string} default_path
	 * @param {boolean} expand
	 * @param {object} window
	 * @returns {Path}
	 */
	Folder(title, default_path, expand, window) {
	}

	/**
	 * <p>Returns a <strong><a href="Msg.htm">Msg</a> </strong>object
	 *       representing the most recent input event in a <a href="Script_Dialogs1.htm">script dialog</a> (only used in <a href="Detached_Dialogs.htm">detached mode</a>).</p>
	 *       <p>The return value will evaluate to <strong>False</strong> when the
	 *       dialog is closed, which is when you should exit your <a href="The_Dialog_Message_Loop.htm">message loop</a>.</p>
	 *       <p>If the dialog is not already visible (because <strong>Show</strong> has
	 *       not been called) then it will become visible when you first call
	 *       <strong>GetMsg</strong>.</p>
	 * @returns {Msg}
	 */
	GetMsg() {
	}

	/**
	 * <p>Displays a text entry dialog allowing the user to enter a string. The
	 *       optional parameters are:</p>
	 *       <p><em>message</em> - specify message string in the
	 *       dialog<br><em>default</em> - specify default string value<br><em>max</em>
	 *       - specify maximum string length<br><em>buttons</em> - specify button
	 *       labels (in the same format as the <strong>buttons</strong> property
	 *       described above)<br><em>title</em> - specify dialog window
	 *       title<br><em>window</em> - specify parent window for the dialog (a <!--?xml:namespace prefix = "c1" /--><a href="Lister.htm"><strong>Lister
	 *       </strong></a>or a  {@link Tab}). If not specified, the
	 *       <strong>Dialog</strong> object's <strong>window</strong> property will be
	 *       used.<br><em>result</em> - for scripting languages that support
	 *       <em>ByRef</em> parameters, this can specify a variable to receive the
	 *       string the user enters.<br><br>The return value is the entered string, or
	 *       an empty value if the dialog was cancelled. The index of the button
	 *       selected by the user will be available via the <strong>result</strong>
	 *       property once this method returns. The left-most button is index
	 *       <strong>1</strong>, the next button is index <strong>2</strong>, and so
	 *       on. If a dialog has more than one button then by definition the last
	 *       (right-most) button is the "cancel" button and so this will return index
	 *       <strong>0</strong>.</p>
	 * @param {string} message
	 * @param {string} default_value
	 * @param {string} max
	 * @param {string} buttons
	 * @param {string} title
	 * @param {object} window
	 * @param {string} result byref
	 * @returns {string}
	 */
	GetString(message, default_value, max, buttons, title, window, result) {
	}

	/**
	 * <p>Stops the specified timer. The timer must previously have been created
	 *       by a call to the <strong>SetTimer</strong> method.</p>
	 * @param {string} name
	 *
	 */
	KillTimer(name) {
	}

	/**
	 * <p>Restores the previously saved position of a <a href="Script_Dialogs1.htm">script dialog</a>. The position must have
	 *       previously been saved by a call to the <strong>SavePosition</strong>
	 *       method.<br>&nbsp;</p>
	 *       <p>The <strong>id </strong>string is a string that Opus can use to
	 *       identify your dialog or the script it comes from. The template name of the
	 *       dialog will be automatically appended to this. For example, you might
	 *       specify <strong>id</strong> as <em>"kundal"</em> - Opus would then
	 *       internally save the position of a dialog called <em>"dialog1"</em> as
	 *       <em>"kundal!dialog1"</em>. Make sure you pick a string that other script
	 *       authors are unlikely to use as Opus has no other way of telling the saved
	 *       positions apart.<br>&nbsp;</p>
	 *       <p>The optional type parameter lets you control which position elements
	 *       are restored - specify <em>"pos"</em> to only restore the position,
	 *       <em>"size"</em> to only restore the size, or <em>"pos,size"</em> to
	 *       restore both (this is also the default, so you can also omit the argument
	 *       all together).</p>
	 * @param {string} id
	 * @param {string} type
	 *
	 */
	LoadPosition(id, type) {
	}

	/**
	 * <p>Displays a "Browse to Open File" dialog that lets the user select one
	 *       or more files. The optional parameters are:</p>
	 *       <p><em>title</em> - specify title of the dialog<br><em>default</em> -
	 *       specify the default file selected in the dialog&nbsp;(if a folder is
	 *       specified this specifies the default location but no file will be
	 *       selected)<br><em>window</em> - specify parent window for the dialog (a <!--?xml:namespace prefix = "c1" /--><a href="Lister.htm"><strong>Lister
	 *       </strong></a>or a  {@link Tab}). If not specified, the
	 *       <strong>Dialog</strong> object's <strong>window</strong> property will be
	 *       used.<br>&nbsp;</p>
	 *       <p>A collection of  {@link Item}&nbsp;objects is returned to
	 *       indicate the files selected by the user. The returned object will have a
	 *       <strong>result</strong> property that you should check first - the
	 *       collection of items is only valid if <strong>result</strong> returns
	 *       <strong>True</strong>. If it returns <strong>False</strong> it means the
	 *       user cancelled the dialog.<br></p>
	 * @param {string} title
	 * @param {string} default_file
	 * @param {object} window
	 * @returns {Item[]}
	 */
	Multi(title, default_file, window) {
	}

	/**
	 * <p>Displays a "Browse to Open File" dialog that lets the user select a
	 *       single file. The optional parameters are:</p>
	 *       <p><em>title</em> - specify title of the dialog<br><em>default</em> -
	 *       specify the default file selected in the dialog&nbsp;(if a folder is
	 *       specified this specifies the default location but no file will be
	 *       selected)<br><em>window</em> - specify parent window for the dialog (a <!--?xml:namespace prefix = "c1" /--> {@link Tab}). If not specified, the
	 *       <strong>Dialog</strong> object's <strong>window</strong> property will be
	 *       used.<br><br>A single  <!--?xml:namespace prefix = "c1" /-->{@link Item}&nbsp;object is returned to
	 *       indicate the file selected by the user. This object will have an
	 *       additional <strong>result</strong> property that will be
	 *       <strong>False</strong> if the user cancelled the dialog - the other normal
	 *       <strong>Item</strong> properties will only be valid if
	 *       <strong>result</strong> is <strong>True</strong>.</p>
	 * @param {string} title
	 * @param {string} default_file
	 * @param {object} window
	 * @returns {Item}
	 */
	Open(title, default_file, window) {
	}

	/**
	 * <p>Displays a dialog with one or more buttons. The optional parameters
	 *       are:</p>
	 *       <p><em>message</em> - specify message string in the
	 *       dialog<br><em>buttons</em> - specify button labels (in the same format as
	 *       the <strong>buttons</strong> property described above)<br><em>title</em> -
	 *       specify dialog window title<br><em>window</em> - specify parent window for
	 *       the dialog (a <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link Tab}). If not specified, the
	 *       <strong>Dialog</strong> object's <strong>window</strong> property will be
	 *       used.<br><br>The return value is the index of the button selected by the
	 *       user, and this is also available in the <strong>result</strong> property
	 *       once the method returns. The left-most button is index <strong>1</strong>,
	 *       the next button is index <strong>2</strong>, and so on. If a dialog has
	 *       more than one button then by definition the last (right-most) button is
	 *       the "cancel" button and so this will return index
	 *     <strong>0</strong>.</p>
	 * @param {string} message
	 * @param {string} buttons
	 * @param {string} title
	 * @param {object} window
	 * @returns {int}
	 */
	Request(message, buttons, title, window) {
	}

	/**
	 * <p>Turns a previously <a href="Detached_Dialogs.htm">detached dialog</a>
	 *       into a non-detached one, by taking over and running the default message
	 *       loop.&nbsp;The <strong>RunDlg </strong>method won't return until the
	 *       dialog has closed. You might use this if you created a dialog using
	 *       <strong>Create</strong>, in order to initialize its controls, but don't
	 *       actually want to run an interactive message loop.</p>
	 *       <p>The return value is the same as the object's <strong>result</strong>
	 *       property, and represents the index of the close button selected by the
	 *       user.</p>
	 *       <p>If the dialog is not already visible (because neither
	 *       <strong>Show</strong> nor <strong>GetMsg</strong> were called) then it
	 *       will become visible when you call <strong>RunDlg</strong>. (Compatibility
	 *       note: Prior to Opus 12.22, scripts needed to call <strong>Show</strong>
	 *       explicitly.)</p>
	 * @returns {int}
	 */
	RunDlg() {
	}

	/**
	 * <p>Saves the position (and size) of the dialog to your Opus configuration.
	 *       The position can then be restored later on by a call to
	 *       <strong>LoadPosition</strong>.</p>
	 *       <p>&nbsp;</p>
	 *       <p>Normally you would call <strong>LoadPosition </strong>before displaying
	 *       your dialog, and <strong>SavePosition </strong>after the dialog has been
	 *       closed.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The <strong>id </strong>string is a string that Opus can use to
	 *       identify your dialog or the script it comes from. The template name of the
	 *       dialog will be automatically appended to this. For example, you might
	 *       specify <strong>id</strong> as <em>"kundal"</em> - Opus would then
	 *       internally save the position of a dialog called <em>"dialog1"</em> as
	 *       <em>"kundal!dialog1"</em>. Make sure you pick a string that other script
	 *       authors are unlikely to use as Opus has no other way of telling the saved
	 *       positions apart.</p>
	 * @param {string} id
	 *
	 */
	SavePosition(id) {
	}

	/**
	 * <p>Creates a timer that will generate a periodic <strong>timer</strong>
	 *       event for your script. The <strong>period</strong> must be specified in
	 *       milliseconds (e.g. 1000 would equal&nbsp;one second).</p>
	 *       <p>&nbsp;</p>
	 *       <p>You can optionally specify a <strong>name</strong> for the timer - if
	 *       you don't provide a name, one will be generated automatically (and the
	 *       name of the new timer will be returned).</p>
	 * @param {int} period
	 * @param {string} name
	 * @returns {string}
	 */
	SetTimer(period, name) {
	}

	/**
	 * <p>Displays the dialog that has been pre-configured using the various
	 *       properties of this object. See the properties section above for a full
	 *       description of these.<br>&nbsp;</p>
	 *       <p>If the <strong>detach</strong> property is <strong>False</strong>, the
	 *       call will not return until the dialog has been closed. The return value is
	 *       the index of the button selected by the user, and this is also available
	 *       in the <strong>result</strong> property once the method returns. The
	 *       left-most button is index <strong>1</strong>, the next button is index
	 *       <strong>2</strong>, and so on. If a dialog has more than one button then
	 *       by definition the last (right-most) button is the "cancel" button and so
	 *       this will return index <strong>0</strong>.</p>
	 *       <p>If the <strong>detach</strong> property is <strong>True</strong>, the
	 *       call will return immediately and the return value is meaningless. You
	 *       should then either run a message loop for the “detached” dialog, or call
	 *       <strong>RunDlg</strong> to run the standard loop.</p>
	 * @returns {int}
	 */
	Show() {
	}

	/**
	 * <p>Displays a "Browse to Save File" dialog that lets the user&nbsp;select
	 *       a single file or enter a new filename to save. The optional parameters
	 *       are:</p>
	 *       <p><em>title</em> - specify title of the dialog<br><em>default</em> -
	 *       specify the default file selected in the dialog&nbsp;(if a folder is
	 *       specified this specifies the default location but no file will be
	 *       selected)</p>
	 *       <p><em>type</em> - specify a list of filetypes to populate the "Save as
	 *       Type" dropdown in the save dialog.<br><em>window</em> - specify parent
	 *       window for the dialog (a <!--?xml:namespace prefix = "c1" /-->  {@link Tab}). If not specified, the
	 *       <strong>Dialog</strong> object's <strong>window</strong> property will be
	 *       used.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The optional <em>type</em> parameter consists of one or more pairs of
	 *       strings, separated by exclamation marks (<strong>!</strong>). The first
	 *       string of each pair is the plain text string shown in the drop-down, and
	 *       the second string of each pair is the actual file extension. You can also
	 *       specify multiple extensions for the one type by separating them with
	 *       semicolon. If you want the default "All files" item to be added to the
	 *       list, add a <strong>#</strong> character at the start of the string. For
	 *       example,&nbsp;<em>#Text Files!*.txt!Doc Files!*.doc.</em><br><br>A   {@link Path}&nbsp;object is returned to
	 *       indicate the&nbsp;file chosen by the user. This object will have an
	 *       additional <strong>result</strong> property that will be
	 *       <strong>False</strong> if the user cancelled the dialog - the other normal
	 *       <strong>Path</strong> properties will only be valid if
	 *       <strong>result</strong> is <strong>True.</strong></p>
	 * @param {string} title
	 * @param {string} default_file
	 * @param {object} window
	 * @param {string} type
	 * @returns {Path}
	 */
	Save(title, default_file, window, type) {
	}

	/**
	 * <p>Used to change how custom dialogs are grouped with other Opus windows
	 *       on the taskbar. Specify a group name to move the window into an
	 *       alternative group, or omit the group argument to reset back to the default
	 *       group. If one or more windows are moved into the same group, they will be
	 *       grouped together, separate from other the default group.</p>
	 *       <p>This only works on Windows 7 and above, and only when taskbar grouping
	 *       is enabled. Group names are limited to 103 characters and will be
	 *       truncated if longer. Spaces and dots in group names are automatically
	 *       converted to underscores.</p>
	 *       <p>Only works with custom script dialogs (i.e. when you are using the
	 *       <b>template</b> property). Must be called after the dialog has been
	 *       created (i.e. after <b>Show</b> has been called -- see the <b>RunDlg</b>
	 *       method if you want to avoid writing your own message loop just for
	 *       this).</p>
	 *       <p>Returns true on success.</p>
	 * @param {string} group
	 * @returns {boolean}
	 */
	SetTaskbarGroup(group) {
	}

	/**
	 * <p>Returns a  {@link Vars}&nbsp;object that represents the
	 *       variables that are scoped to this particular dialog. This allows scripts
	 *       to&nbsp;use variables that persist from one use of the dialog to
	 *       another.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The <strong>id </strong>string is a string that Opus can use to
	 *       identify your dialog or the script it comes from. The template name of the
	 *       dialog will be automatically appended to this. For example, you might
	 *       specify <strong>id</strong> as <em>"kundal"</em> - Opus would then
	 *       internally save these variables for a dialog called <em>"dialog1"</em> as
	 *       <em>"kundal!dialog1"</em>. Make sure you pick a string that other script
	 *       authors are unlikely to use as Opus has no other way of telling the saved
	 *       variables apart.</p>
	 * @param {string} id
	 * @returns {Vars}
	 */
	Vars(id) {
	}

	/**
	 * <p>Allows a <!--?xml:namespace prefix = "c1" /--> <!--?xml:namespace prefix = "c1" /--><a href="Script_Dialogs1.htm">script dialog</a> to monitor events in a folder
	 *       tab. You will receive notifications of the requested events through your
	 *       message loop.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The <strong>tab</strong> parameter specifies the {@link Tab}you want to watch. The
	 *       <strong>events </strong>string is a comma-separated list of events you
	 *       want to watch for. The <strong>id </strong>string is an optional
	 *       parameter; it lets you assign your own ID to the tab to make it easier to
	 *       tell where events are coming from (if you're monitoring multiple tabs, for
	 *       instance).</p>
	 *       <p>&nbsp;</p>
	 *       <p>These are the events you can watch for are. Note that some are
	 *       equivalent to the existing script events (e.g.
	 *       <strong>OnActivateTab</strong>):</p>
	 *       <ul>
	 *         <li><strong>select </strong>- items in the tab are selected or
	 *         deselected<br>
	 *         </li><li><strong>navigate </strong>- the folder is changed in the tab<br>
	 *         </li><li><strong>add </strong>- items are added to the folder<br>
	 *         </li><li><strong>delete </strong>- items are deleted from the folder<br>
	 *         </li><li><strong>change </strong>- items in the folder are changed (size,
	 *         date, name, etc)<br>
	 *         </li><li><strong>activate </strong>- tab activated or deactivated<br>
	 *         </li><li><strong>srcdst </strong>- source/destination state changed<br>
	 *         </li><li><strong>view </strong>- view mode changed<br>
	 *         </li><li><strong>flat </strong>- flat view state changed
	 *         </li><li><strong>filter</strong> - quick filter changed </li></ul>
	 *       <p>Once notification has been established you will be notified of all
	 *       requested events when they occur. Note that no specific information is
	 *       sent with notifications - e.g. for the "change" event, you aren't told
	 *       which items have changed, only that something has.</p>
	 *       <p>&nbsp;</p>
	 *       <p>You will receive notification events in your message loop. The various
	 *       properties of the {@link Msg} object let
	 *       you determine what happened.</p>
	 *       <p>&nbsp;</p>
	 *       <p>The {@link Msg}<strong>.event</strong>
	 *       property will be set to <strong>tab</strong> for notifications from a
	 *       watched folder tab.</p>
	 *       <p><br>The {@link Msg}<strong>.control</strong> property
	 *       tells you which tab the change occurred in; if you specified an ID when
	 *       you called the <strong>WatchTab</strong> function, this will be in the
	 *       <strong>{@link Msg}.control</strong>
	 *       property - otherwise, it will be the numeric handle of the tab. Note that
	 *       it's *not* the actual {@link Tab}object.
	 *       You can access the {@link Tab}object via
	 *       the <strong>{@link Msg}.tab
	 *       </strong>property but this can be inefficient, as it requires a new {@link Tab}object to be created every time.
	 *       If you're only monitoring one tab it's better to store the {@link Tab}object in your own variable - and
	 *       if you're monitoring multiple tabs you could, e.g. use a unique ID for
	 *       each one and keep the objects in a {@link Map}.</p>
	 *       <p><br>The {@link Msg}<strong>.value</strong> property
	 *       tells you which notification event occurred. Possible values are
	 *       <strong>select</strong>, <strong>navigate</strong>,
	 *       <strong>filechange</strong>, <strong>activate</strong>,
	 *       <strong>srcdst</strong>, <strong>view</strong>, <strong>flat</strong>,
	 *       <strong>filter</strong>&nbsp;and <strong>close</strong> (sent if the tab
	 *       is closed while you are monitoring it).</p>
	 *       <p><br>For the <strong>filechange</strong> event, the {@link Msg}<strong>.data</strong> property
	 *       contains a bit mask indicating which file events occurred.
	 *       <strong>1</strong> = add, <strong>2</strong> = delete, <strong>4</strong>
	 *       = change. The values will be added together (so e.g. <strong>6</strong>
	 *       indicates at least one item was changed and at least one was deleted).
	 *       It's up to your script to determine exactly what changed.</p>
	 *       <p>&nbsp;</p>
	 *       <p>You can change the events you're monitoring for by calling the
	 *       <strong>WatchTab</strong> method again with the same tab and new event
	 *       list.</p>
	 *       <p>&nbsp;</p>
	 *       <p>To stop monitoring an existing tab, call <strong>WatchTab</strong> with
	 *       the second parameter set to <strong>stop</strong>. Monitoring is
	 *       automatically cancelled if your dialog closes (and also if the tab
	 *       closes).</p>
	 *       <p>&nbsp;</p>
	 * @param {object} Tab
	 * @param {string} events
	 * @param {string} id
	 * @returns {boolean}
	 */
	WatchTab(Tab, events, id) {
	}
} //end class
