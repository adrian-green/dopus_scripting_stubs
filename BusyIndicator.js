/**
 *A BusyIndicator object lets you control the breadcrumbs bar busy indicator from your script.
 */
class BusyIndicator {
	/**
	 * <p>Before the <strong>Init</strong> method has been called, you can set
	 *       this property to <strong>True</strong> to enable abort by the user (as
	 *       shown above).</p>
	 *       <p>After <strong>Init</strong> has been called, this property will return
	 *       <strong>True</strong> if the user has clicked the <em>Abort</em> link.</p>
	 *       <p>The <strong>abort</strong> property does not change if the lister or
	 *       tab your <strong>BusyIndicator</strong> is associated with closes. If you
	 *       need to stop when that happens then you must check for it separately,
	 *       typically by testing the result of the <strong>Update</strong>
	 *     method.</p>
	 * @returns {boolean}
	 */

	abort;
	/**
	 * <p>Removes the busy indicator from display and destroys its internal data
	 *       structures. The <strong>BusyIndicator</strong> object itself can be
	 *       re-used by calling the <strong>Init</strong> method again.</p>
	 *       <p>Returns boolean success. Failure usually means the lister or tab was
	 *       closed.</p>
	 * @returns {boolean}
	 */
	Destroy(){}
	/**
	 * <p>Removes the busy indicator from display, but does not destroy its
	 *       internal data. The indicator can be re-displayed by calling the
	 *       <strong>Show</strong> method.<br></p>
	 *       <p>Returns boolean success. Failure usually means the lister or tab was
	 *       closed.</p>
	 * @returns {boolean}
	 */
	Hide(){}
	/**
	 * <p>Initializes a <strong>BusyIndicator</strong> object and optionally
	 *       displays it.</p>
	 *       <p>The <strong>window</strong> parameter specifies the {@link Tab} object that the indicator is to be
	 *       attached to. Using a <strong>Tab</strong> is usually best.</p>
	 *       <p>The optional <strong>description</strong> parameter lets you specify a
	 *       text string that is displayed to the user when they click the spinning
	 *       circle.</p>
	 *       <p>The optional <strong>visible</strong> parameter lets you make the
	 *       indicator visible immediately by passing <strong>True</strong>.
	 *       Alternatively, call the <strong>Show</strong> method to make the indicator
	 *       visible.</p>
	 *       <p>Returns boolean success. Failure usually means the lister or tab was
	 *       closed or invalid.</p>
	 * @param {object} window
	 * @param {string} description
	 * @param {boolean} visible
	 * @returns {boolean}
	 */
	Init(window, description, visible){}
	/**
	 * <p>Displays the busy indicator.</p>
	 *       <p>Returns boolean success. Failure usually means the lister or tab was
	 *       closed.</p>
	 * @returns {boolean}
	 */
	Show(){}
	/**
	 * <p>Updates the busy indicator.</p>
	 *       <p>The <strong>description</strong> parameter lets you specify a new
	 *       description string.</p>
	 *       <p>The optional <strong>percentage</strong> parameter lets you specify a
	 *       new progress bar percentage from 0 to 100. If no
	 *       <strong>percentage</strong> is specified, and none was set by a previous
	 *       call, the progress bar displays an animation indicating something is
	 *       happening without a known percentage.</p>
	 *       <p>Returns boolean success. Failure usually means the lister or tab was
	 *       closed.</p>
	 * @param {string} description
	 * @param {int} percentage
	 * @returns {boolean}
	 */
	Update(description, percentage){}
} //end class
