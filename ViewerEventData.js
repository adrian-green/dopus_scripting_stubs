/**
 *This object is provided to the OnViewerEvent event, which is called whenever certain events occur in a standalone image viewer.
 */
class ViewerEventData {
	/**
	 * <p>Returns a string indicating the event that occurred. The events
	 *       currently defined are:</p>
	 *       <ul>
	 *         <li><strong>create</strong>: A new viewer has been created.
	 *         </li><li><strong>destroy</strong>: A viewer window has been destroyed.
	 *         </li><li><strong>load</strong>: A new image has been loaded in a viewer. The
	 *         <strong>item</strong> property can be used to find out which file was
	 *         loaded.
	 *         </li><li><strong>setfocus</strong>: The viewer window has received focus
	 *         (gone active).
	 *         </li><li><strong>killfocus</strong>:&nbsp;The viewer window has lost focus
	 *         (gone inactive).
	 *         </li><li><strong>click</strong>: The left button was clicked on the image
	 *         (requires mouse buttons to be set to trigger <em>Script event</em> in
	 *         <strong>Preferences / Viewer / Mouse Buttons</strong>).
	 *         </li><li><strong>dblclk</strong>: The left button was double-clicked on the
	 *         image.
	 *         </li><li><strong>mclick</strong>: The middle button was clicked on the image.
	 *         </li></ul>
	 * @returns {string}
	 */

	event;
	/**
	 * <p>For the <strong>load</strong> event, returns an  {@link Item}&nbsp;object representing the
	 *       newly loaded image.</p>
	 * @returns {Item}
	 */

	item;
	/**
	 * <p>Returns a  {@link Viewer}&nbsp;object representing
	 *       the viewer the event occurred in.</p>
	 * @returns {Viewer}
	 */

	viewer;
	/**
	 * <p>For the click events, returns the x coordinate within the viewer window
	 *       that the click occurred.</p>
	 * @returns {int}
	 */

	x;
	/**
	 * <p>For the click events, returns the&nbsp;y coordinate within the viewer
	 *       window that the click occurred.&nbsp;</p>
	 * @returns {int}
	 */

	y;
	/**
	 * <p>For the click events, returns the width of the viewer window.</p>
	 * @returns {int}
	 */

	w;
	/**
	 * <p>For the click events, returns the height of the viewer
	 *   window.</p>
	 * @returns {int}
	 */

	h;
} //end class
