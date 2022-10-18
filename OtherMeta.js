/**
 *This object provides general metadata properties relating to files and folders. It is obtained from the Metadata object.
 */
class OtherMeta {
	/**
	 * <p>An automatically generated description string for the item. This is the
	 *       same string that is shown in the Description column in a Lister. Opus
	 *       automatically generates the description for various types of files using
	 *       the other metadata in ways that make the most sense.</p>
	 * @returns {string}
	 */

	autodesc;
	/**
	 * <p>For a folder, the size of which has been calculated via {@link GetSizes} or similar, this
	 *       provides the number of sub-folders directly underneath the
	 *   folder.</p>
	 * @returns {int}
	 */

	dircount;
	/**
	 * <p>Similar to <strong>dircount</strong>, this provides the total number of
	 *       sub-folders underneath the folder (this is a recursive count - it includes
	 *       sub-sub-folders, sub-sub-sub-folders, etc.)</p>
	 * @returns {int}
	 */

	dircounttotal;
	/**
	 * <p>For a folder, the size of which has been calculated via  {@link GetSizes} or similar, this
	 *       provides the number of files directly located&nbsp;in that
	 *   folder.</p>
	 * @returns {int}
	 */

	filecount;
	/**
	 * <p>Similar to <strong>filecount</strong>, this provides the total number
	 *       of files in the folder and all its sub-folders, sub-sub-folders,
	 *     etc.</p>
	 * @returns {int}
	 */

	filecounttotal;
	/**
	 * <p>For a folder, the size of which has been calculated via  <!--?xml:namespace prefix = "c1" /-->{@link GetSizes} or similar, this
	 *       returns a string giving a summary of the contents of the folder.</p>
	 * @returns {string}
	 */

	foldercontents;
	/**
	 * <p>A description automatically generated for the item by its parent
	 *       virtual file system.</p>
	 * @returns {string}
	 */

	nsdesc;
	/**
	 * <p>Returns the user-assigned rating for this file or folder.</p>
	 * @returns {int}
	 */

	rating;
	/**
	 * <p>Returns&nbsp;a  {@link Path}&nbsp;object representing the
	 *       target path of shortcuts and links.</p>
	 * @returns {Path}
	 */

	target;
	/**
	 * <p>Returns a <em>string</em> indicating the type of the link
	 *       (<em>unknown</em>, <em>linkfile</em>, <em>dosfile</em>, <em>url</em>,
	 *       <em>junction</em>, <em>softlink</em>).</p>
	 * @returns {string}
	 */

	target_type;
	/**
	 * <p>Returns the user-assigned description for the file or
	 *   folder.</p>
	 * @returns {string}
	 */

	usercomment;
} //end class
