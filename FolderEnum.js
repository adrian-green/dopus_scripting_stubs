/**
 *This object lets a script enumerate the contents of a folder. It is obtained using the FSUtil.ReadDir method.
 */
class FolderEnum {
	/**
	 * <p><strong>True</strong> if the enumeration is complete, otherwise
	 *       <strong>False</strong>.</p>
	 * @returns {boolean}
	 */

	complete;
	/**
	 * <p>If an error occurs this will return the error code. It will return 0 on
	 *       success.</p>
	 * @returns {int}
	 */

	error;
	/**
	 * <p>Closes the underlying file system handle used to perform the
	 *       enumeration. You might call this method if you want to delete the folder
	 *       you just enumerated. After this method is called the
	 *       <strong>complete</strong> property will return
	 *     <strong>True</strong>.</p>
	 *
	 */
	Close(){}
	/**
	 * <p>Returns the next item in the enumeration.<br><br>By default (with no
	 *       arguments provided) a single  {@link Item}&nbsp;object is returned. For
	 *       higher performance, you can&nbsp;specify a number&nbsp;as the first
	 *       argument to return&nbsp;more than one item at once - in this case, a {@link Item}&nbsp;objects is returned
	 *       instead. Specify <strong>-1</strong> to return all items in the folder in
	 *       one call.</p>
	 *       <p>&nbsp;</p>
	 *       <p>You can also create your own {@link Vector} and pass it as the second
	 *       argument to stop Opus creating a new {@link Vector} each
	 * time.</p>
	 * @param {int} count
	 * @param {Vector} vector
	 * @returns {Item|Vector}
	 */
	Next(count, vector){}
} //end class
