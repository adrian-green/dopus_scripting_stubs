/**
 *This object represents a progress dialog, that lets you visually indicate to the user the progress of your script function. It is obtained from the Command.progress property.
 */
class Progress {
	/**
	 * <p>Before calling <strong>Init</strong>, set to <strong>True</strong> if
	 *       the <em>Abort</em> button should be available, or <strong>False</strong>
	 *       to disable it.</p>
	 * @returns {boolean}
	 */

	abort;
	/**
	 * <p>Before calling <strong>Init</strong>, set to <strong>True</strong> if
	 *       the dialog should show progress in bytes rather than whole
	 * files.</p>
	 * @returns {boolean}
	 */

	bytes;
	/**
	 * <p>Before calling <strong>Init</strong>, set to <strong>True</strong> if
	 *       the dialog should delay before appearing after the <strong>Show</strong>
	 *       method is called. The delay is configured by the user in
	 *     Preferences.</p>
	 * @returns {boolean}
	 */

	delay;
	/**
	 * <p>Before calling <strong>Init</strong>, set to <strong>True</strong> to
	 *       enable a "full size" progress indicator with two separate progress bars
	 *       (one for files and one for bytes).</p>
	 * @returns {boolean}
	 */

	full;
	/**
	 * <p>Before calling <strong>Init</strong>, set to <strong>True</strong> if
	 *       the dialog should be owned by its parent window (the parent is given
	 *       later, when the dialog is created via the <strong>Init</strong>
	 *       method).</p>
	 * @returns {boolean}
	 */

	owned;
	/**
	 * <p>Before calling <strong>Init</strong>, set to <strong>True </strong>if
	 *       the <em>Pause</em> button should be available.</p>
	 * @returns {boolean}
	 */

	pause;
	/**
	 * <p>Before calling <strong>Init</strong>, set to <strong>True</strong> if
	 *       the <em>Skip</em> button should be available. (This just makes it so the
	 *       <em>Skip</em> button can be enabled. You must still call
	 *       <strong>EnableSkip</strong> later to actually enable it; usually once per
	 *       file.)</p>
	 * @returns {boolean}
	 */

	skip;
	/**
	 * <p>Adds the specified number of files to the operation total. The
	 *       <em>bytes </em>argument is optional - in a "full size" progress indicator
	 *       this lets you add to the total byte size of the operation.</p>
	 * @param {int} count
	 * @param {FileSize} bytes
	 *
	 */
	AddFiles(count, bytes){}
	/**
	 * <p>Clears the state of the three "control" buttons (<em>Abort</em> /
	 *       <em>Pause</em> / <em>Skip</em>) so they no longer register as being
	 *       clicked when <strong>GetAbortState</strong> is called.</p>
	 *       <p>If you only want to clear the <em>Skip</em> state, you should normally
	 *       do that as part of a call to <strong>EnableSkip</strong> instead. That way
	 *       you avoid accidentally clearing one of the other states if they become set
	 *       between you calling <strong>GetAbortState</strong> and
	 *       <strong>ClearAbortState</strong>. In fact, there are very few situations
	 *       where you should call <strong>ClearAbortState</strong>.</p>
	 *
	 */
	ClearAbortState(){}
	/**
	 * <p>Enables the progress dialog's <em>Skip</em> button. For
	 *       <strong>EnableSkip</strong> to work, you must have set the
	 *       <strong>skip</strong> property to <strong>True</strong> before the
	 *       progress dialog was created by the <strong>Init</strong> method.</p>
	 *       <p><strong>enable</strong>: If <strong>True</strong>, the <em>Skip</em>
	 *       button should be enabled; otherwise, it should be disabled.</p>
	 *       <p><strong>delay</strong> (optional, <strong>True</strong> by default): If
	 *       <strong>True</strong>, there will be a short delay before the
	 *       <em>Skip</em> button is enabled, with it temporarily disabled during the
	 *       delay; otherwise, the change is instant. See below for why a delay is
	 *       usually a good idea.</p>
	 *       <p><strong>clear</strong> (optional, <strong>True</strong> by default): If
	 *       <strong>True</strong>, any record of the user pushing the <em>Skip</em>
	 *       will be cleared, such that <strong>GetAbortState</strong> no longer
	 *       returns <strong>"s"</strong>. You usually want this if the progress dialog
	 *       just moved to a new item.</p>
	 *       <p>If you support the <em>Skip</em> button, you should normally call
	 *       <strong>EnableSkip</strong> once per file, just after you call
	 *       <strong>SetName</strong> and similar methods. When used that way, you'll
	 *       usually want <strong>delay</strong> and <strong>clear</strong> to both be
	 *       <strong>True</strong>, otherwise clicks of the <em>Skip</em> button
	 *       intended for one file could affect the file(s) that come after it. For
	 *       example, if a file takes a long time but then finishes just as the user
	 *       gets tired of waiting and clicks <em>Skip</em>, the delay and cleared
	 *       state ensure the unwanted click is harmless.</p>
	 * @param {boolean} enable
	 * @param {boolean} delay
	 * @param {boolean} clear
	 *
	 */
	EnableSkip(enable, delay, clear){}
	/**
	 * <p>Finish the current file. If the byte size of the current file has been
	 *       set the total progress will be advanced by any remaining bytes.</p>
	 *
	 */
	FinishFile(){}
	/**
	 * <p>Polls the state of the three "control" buttons. This returns a
	 *       <em>string</em> that indicates which, if any, of the three buttons have
	 *       been clicked by the user. The button states are represented by&nbsp;the
	 *       following letters in the returned string:<br><br><strong>a</strong> -
	 *       Abort<br><strong>p</strong> - Pause<br><strong>s</strong> - Skip<br><br>If
	 *       none of the states apply, an empty string is returned.</p>
	 *       <p><strong>autoPause</strong> (optional, <strong>False</strong> by
	 *       default): If <strong>True</strong>, pausing is handled for you
	 *       automatically. Calls to <strong>GetAbortState(True)</strong> block while
	 *       paused and don't return until unpaused; the "<strong>p</strong>" state is
	 *       never returned. (Note that clicking <em>Skip</em> or <em>Abort</em> will
	 *       implicitly unpause the operation.)</p>
	 *       <p><strong>wanted</strong> (optional): If you only want to check one or
	 *       two of the states, pass a string with their letters. For example,
	 *       <strong>GetAbortState(True,"ap")</strong> will test for the <em>Abort</em>
	 *       and <em>Pause</em> states, but not the <em>Skip</em> one. All states will
	 *       be checked if the argument is an empty string or not given at all.</p>
	 *       <p><strong>simple</strong> (optional, <strong>True</strong> by default):
	 *       If <strong>True</strong>, the result string will have at most one letter,
	 *       indicating the most important state. If <strong>False</strong>, it is
	 *       possible for multiple states to be indicated at once. For example if
	 *       <em>Skip</em> and then <em>Pause</em> are clicked, in that order, without
	 *       the script clearing the <em>Skip</em> state, then
	 *       <strong>GetAbortState(False,"",False)</strong> would return
	 *       "<strong>ps</strong>" while <strong>GetAbortState(False)</strong> would
	 *       return just "<strong>p</strong>".</p>
	 *       <p>To clear the state of the three buttons, call the
	 *       <strong>ClearAbortState</strong> method. To clear just the <em>Skip</em>
	 *       button's state, use the <strong>EnableSkip</strong> method.</p>
	 * @param {boolean} autoPause
	 * @param {string} wanted
	 * @param {boolean} simple
	 * @returns {string}
	 */
	GetAbortState(autoPause, wanted, simple){}
	/**
	 * <p>Hides the progress indicator dialog. The dialog object itself remains
	 *       valid, and can be redisplayed with the <strong>Show</strong> method if
	 *       desired.</p>
	 *
	 */
	Hide(){}
	/**
	 * <p>Hides or shows the <em>"XX bytes / YY bytes" </em>string in the
	 *       progress dialog. You can use this to hide the string if the progress does
	 *       not indicate a number of bytes (e.g. when it indicates a percentage). Pass
	 *       <strong>True</strong> for the <em>show</em> argument to show the string
	 *       and <strong>False</strong> to hide it.</p>
	 * @param {boolean} show
	 *
	 */
	HideFileByteCounts(show){}
	/**
	 * <p>Initializes the dialog. This method causes the actual dialog to be
	 *       created, although it will not be displayed until the <strong>Show</strong>
	 *       method is called. The fundamental properties shown above must be set
	 *       before this method is called - once the dialog has been created they can
	 *       not be altered.</p>
	 *       <p>The <em>parent </em>parameter can be either a {@link Lister}- this controls which window
	 *       the dialog is centered over, and if the <strong>owned</strong> property is
	 *       set to <strong>True</strong> which window it is owned by (always appears
	 *       on top of). If no parent is provided the dialog will not be associated
	 *       with any particular window.</p>
	 *       <p>The <em>title</em> parameter specifies the window title of the
	 *       dialog.</p>
	 * @param {Tab|Lister} parent_or_parent
	 * @param {string} title
	 *
	 */
	Init(parent_or_parent, title){}
	/**
	 * <p>Resets the byte count for the current file to zero.</p>
	 *
	 */
	InitFileSize(){}
	/**
	 * <p>Resets the total completed file and byte counts to zero.</p>
	 *
	 */
	Restart(){}
	/**
	 * <p>Sets the total completed byte count.</p>
	 * @param {FileSize} bytes
	 *
	 */
	SetBytesProgress(bytes){}
	/**
	 * <p>Sets the size of the current file.</p>
	 * @param {FileSize} bytes
	 *
	 */
	SetFileSize(bytes){}
	/**
	 * <p>Sets the total number of files.</p>
	 * @param {int} count
	 *
	 */
	SetFiles(count){}
	/**
	 * <p>Sets the total completed file count.</p>
	 * @param {int} count
	 *
	 */
	SetFilesProgress(count){}
	/**
	 * <p>Sets the text at the top of the dialog that indicates the source and
	 *       destination of an operation. The <em>header</em> argument refers to the
	 *       string that normally says <em>From:</em> - this allows you to change it in
	 *       case that term is not applicable to your action. The <em>from</em>
	 *       argument is the source path, and the&nbsp;<em>to</em> argument (if there
	 *       is one) is the destination path. Note that if you specify a destination
	 *       path this always has a <em>To:</em> header appended to it.</p>
	 *       <p>If you omit the <em>to</em> argument entirely (not just passing an
	 *       empty string), the destination line will become blank, including the
	 *       <em>To:</em> header. Use that if you want the second line to be used
	 *       sometimes but not always. If you never want anything on the second line,
	 *       use the <strong>SetStatus</strong> method instead as it will not add space
	 *       for the extra line.</p>
	 * @param {string} header
	 * @param {string} from
	 * @param {string} to
	 *
	 */
	SetFromTo(header, from, to){}
	/**
	 * <p>Sets the name of the current file.</p>
	 * @param {string} name
	 *
	 */
	SetName(name){}
	/**
	 * <p>Sets the current progress as a percentage (from 0 to 100).</p>
	 * @param {int} percent
	 *
	 */
	SetPercentProgress(percent){}
	/**
	 * <p>Sets the text displayed in the status line at the top of the
	 * dialog.</p>
	 *       <p>This sets a single-line status message, while
	 *       <strong>SetFromTo</strong> can be used to indicate source and destination
	 *       paths on two lines.</p>
	 * @param {string} status
	 *
	 */
	SetStatus(status){}
	/**
	 * <p>Sets the title of the dialog.</p>
	 * @param {string} title
	 *
	 */
	SetTitle(title){}
	/**
	 * <p>Sets the type of the current item - either <em>file</em> or
	 *       <em>dir</em>.</p>
	 * @param {string} type
	 *
	 */
	SetType(type){}
	/**
	 * <p>Displays the progress indicator dialog. Call this once you have created
	 *       the dialog using the <strong>Init</strong> method.</p>
	 *
	 */
	Show(){}
	/**
	 * <p>Skips over the current file. Set the <em>complete </em>argument to
	 *       <strong>True </strong>to have the file counted as "complete", or
	 *       <strong>False</strong> to count it as "skipped".</p>
	 * @param {boolean} complete
	 *
	 */
	SkipFile(complete){}
	/**
	 * <p>Step the byte progress indicator the specified number of
	 *   bytes.</p>
	 * @param {FileSize} bytes
	 *
	 */
	StepBytes(bytes){}
	/**
	 * <p>Step the file progress indicator the specified number of
	 *   files.</p>
	 * @param {int} count
	 *
	 */
	StepFiles(count){}
} //end class
