/**
 *This object is provided to the OnGetCopyQueueName event, which is called whenever a copy operation begins that uses automatically-managed copy queues.
 */
class GetCopyQueueNameData {
	/**
	 * <p>Returns a  {@link Path}&nbsp;object representing the
	 *       destination path of the copy operation.</p>
	 * @returns {Path}
	 */

	dest;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link Tab}&nbsp;object representing the
	 *       destination folder tab.</p>
	 * @returns {Tab}
	 */

	desttab;
	/**
	 * <p>Returns a binary string indicating the physical drive indices that the
	 *       destination path is located on (if any). For example,
	 *       00100000000000000000000000 indicates that drive C: is the destination
	 *       drive.</p>
	 * @returns {string}
	 */

	dest_drives;
	/**
	 * <p>Returns <strong>True</strong> if the operation is a move instead of a
	 *       copy.&nbsp;</p>
	 * @returns {boolean}
	 */

	move;
	/**
	 * <p>Returns the default queue name for this operation.</p>
	 * @returns {string}
	 */

	name;
	/**
	 * <p>Returns a  {@link Path}&nbsp;object representing
	 *       the&nbsp;source path of the copy operation.</p>
	 * @returns {Path}
	 */

	source;
	/**
	 * <p>Returns a  <!--?xml:namespace prefix = "c1" /-->{@link Tab}&nbsp;object representing
	 *       the&nbsp;source folder tab.</p>
	 * @returns {Tab}
	 */

	sourcetab;
	/**
	 * <p>Returns a binary string indicating the physical drive indices that
	 *       the&nbsp;source path is located on (if any). For example,
	 *       00001000000000000000000000 indicates that drive E: is the source
	 *     drive.</p>
	 * @returns {string}
	 */

	source_drives;
} //end class
