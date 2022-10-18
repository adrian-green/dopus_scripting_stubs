/**
 *The Listers object is a collection of all currently open Lister windows (each one represented by a Listerobject). It can be obtained from the DOpus.listers property.
 */
class Listers {
	/**
	 * <p>Lets you enumerate the currently open Listers.</p>
	 *       <p>Do not assume that <strong>DOpus.listers(0)</strong> is the window
	 *       which launched your script. See the note near the top of the
	 *   page.</p>
	 * @returns {Lister[]}
	 */

	_default_value
	/**
	 * <p>Returns a {@link Lister}object
	 *       representing the most recently active Lister window.</p>
	 *       <p>Do not assume that <strong>DOpus.listers.lastactive</strong> is the
	 *       window which launched your script. See the note near the top of the
	 *       page.</p>
	 * @returns {Lister}
	 */

	lastactive;

	/**
	 * <p>The first time a script accesses the <strong>DOpus.listers</strong>
	 *       property, a snapshot is taken of all currently open Listers. If the script
	 *       then opens or closes Listers itself, these changes will not be reflected
	 *       by this collection. To re-synchronize the collection, call the
	 *       <strong>Update</strong> method.<br></p>
	 *
	 */
	Update() {
	}
} //end class
