/**
 *The Viewer object represents a standalone image viewer.
 */
class Viewer {
	/**
	 * <p>Returns the bottom coordinate of the viewer window.</p>
	 * @returns {int}
	 */

	bottom;
	/**
	 * <p>Returns an  {@link Item}&nbsp;object representing the
	 *       currently displayed image.</p>
	 * @returns {Item}
	 */

	current;
	/**
	 * <p>Returns a collection of  {@link Item}&nbsp;objects representing the
	 *       images in the viewer's list.</p>
	 * @returns {Item[]}
	 */

	files;
	/**
	 * <p>Returns <strong>True</strong> if the viewer is currently the foreground
	 *       (active) window in the system.</p>
	 * @returns {boolean}
	 */

	foreground;
	/**
	 * <p>Returns the index of the currently viewed image within the viewer's
	 *       list of files.</p>
	 * @returns {int}
	 */

	index;
	/**
	 * <p>Returns <strong>True</strong> if the viewer is the most recently active
	 *       viewer.</p>
	 * @returns {boolean}
	 */

	lastactive;
	/**
	 * <p>Returns the left coordinate of the viewer window.</p>
	 * @returns {int}
	 */

	left;
	/**
	 * <p>Returns a  {@link Tab}&nbsp;object representing the tab
	 *       that launched the viewer (if there was one, and if it still
	 *   exists).</p>
	 * @returns {Tab}
	 */

	parenttab;
	/**
	 * <p>Returns the right coordinate of the viewer window.</p>
	 * @returns {int}
	 */

	right;
	/**
	 * <p>Returns or sets the title bar string for the viewer window.</p>
	 *       <p><br></p>
	 *       <p>You can use several special "tokens" in the title string to insert
	 *       various pieces of
	 *       information:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%P</strong>
	 *       - full path of the currently viewed
	 *       image<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%N</strong>
	 *       - name of the current displayed
	 *       image<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%R</strong>
	 *       - drive root of the current
	 *       image<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%E</strong>
	 *       - displays * if the image's metadata has been modified and not
	 *       saved<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%I</strong>
	 *       -&nbsp;current image's index (number) in&nbsp;the list of
	 *       images<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%O</strong>
	 *       -&nbsp;total number of images in the
	 *       list<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%W</strong>
	 *       -&nbsp;width of the&nbsp;current
	 *       image<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>%H</strong>
	 *       -&nbsp;height of the current
	 *       image<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>%D</strong>
	 *       -&nbsp;depth of the current image (bits per
	 *       pixel)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>%M</strong>
	 *       -&nbsp;current image's
	 *       dimensions<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	 *       <strong>%S</strong> - file size on
	 *       disk<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%F</strong>
	 *       - folder
	 *       name<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%C</strong>
	 *       - collection name if current image is <!--?xml:namespace prefix = "c1" /--><a href="../Opus12/Image_Marking.htm">marked</a><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%L</strong>
	 *       - any  <a href="../Labels1.htm">labels</a> assigned to the current
	 *       image<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%T</strong>
	 *       -&nbsp; original title (useful for simply adding a prefix or suffix to the
	 *       title)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>%%</strong>
	 *       - insert a literal % character</p>
	 * @returns {string}
	 */

	title;
	/**
	 * <p>Returns the top coordinate of the viewer
	 * window.</p>
	 * @returns {int}
	 */

	top;
	/**
	 * <p>Adds the specified file to the viewer's current list of files. You can
	 *       either pass a string or a {@link Path}
	 *       object to indicate the file to add to the list. By default the file will
	 *       be added to the end of the list, unless you specify a 0-based index as the
	 *       second argument.</p>
	 * @param {string} filepath
	 * @param {int} index
	 *
	 */
	AddFile(filepath, index){}
	/**
	 * <p>Runs a command in the context of this viewer window. You can either
	 *       pass a string or a <a href="Command.htm"><strong>Command
	 *       </strong></a>object.</p>
	 *       <p>&nbsp;</p>
	 *       <p>If the argument you pass is a string then it can only be a viewer
	 *       command argument as documented for the <strong><a href="../Show.htm">Show</a> VIEWERCMD</strong> command. For example,
	 *       <b>Command(“next”)</b> would run the <strong>Show VIEWERCMD=next
	 *       </strong>command in the context of this viewer.</p>
	 *       <p>&nbsp;</p>
	 *       <p>If you pass a {@link Command}object
	 *       then all commands&nbsp;(internal or external)&nbsp;can be used.</p>
	 * @param {string|Command} command
	 */
	Command(command){}
	/**
	 * <p>Removes the specified file from the viewer's current list of files. You
	 *       can either pass the 0-based index of the file to remove, or the filepath
	 *       (either as a string or a {@link Path}
	 *       object).</p>
	 * @param {int|string} index_or_filepath
	 *
	 */
	RemoveFile(index_or_filepath){}
	/**
	 * <p>Used to change how the viewer window is grouped with other Opus windows
	 *       on the taskbar. Specify a group name to move the window into an
	 *       alternative group, or omit the group argument to reset back to the default
	 *       group. If one or more windows are moved into the same group, they will be
	 *       grouped together, separate from other the default group.</p>
	 *       <p>This only works on Windows 7 and above, and only when taskbar grouping
	 *       is enabled. Group names are limited to 103 characters and will be
	 *       truncated if longer. Spaces and dots in group names are automatically
	 *       converted to underscores.</p>
	 *       <p>Returns true on success.</p>
	 * @param {string} group
	 * @returns {boolean}
	 */
	SetTaskbarGroup(group){}
} //end class
