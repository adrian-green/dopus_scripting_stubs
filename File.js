/**
 *This object lets you read or write binary data from or to a file. It is obtained from the FSUtil.OpenFile and Item.Open methods.
 */
class File {
	/**
	 * <p>Returns the full pathname of the file.</p>
	 * @returns {string}
	 */

	_default_value
	/**
	 * <p>Returns a Win32 error code that indicates the success or failure of the
	 *       last operation. If the previous operation succeeded this will generally be
	 *       <strong>0</strong>.<br><br>For example, if you try to open a non-existing
	 *       file for reading using <strong>FSUtil.OpenFile</strong>, a valid
	 *       <strong>File</strong> object will be returned - but the file itself would
	 *       not be open. You can check if <strong>error</strong> returns
	 *       <strong>0</strong> before proceeding to use the <strong>File</strong>
	 *       object.</p>
	 * @returns {int}
	 */

	error;
	/**
	 * <p>Returns the full pathname of the file as a  {@link Path}&nbsp;object.</p>
	 * @returns {Path}
	 */

	path;
	/**
	 * <p>Returns a  {@link FileSize}&nbsp;object representing
	 *       the size of this file, in bytes.</p>
	 * @returns {FileSize}
	 */

	size;
	/**
	 * <p>Returns a  {@link FileSize}&nbsp;object representing
	 *       the current position of the read or write cursor within this file, in
	 *       bytes.</p>
	 * @returns {FileSize}
	 */

	tell;

	/**
	 * <p>Closes the underlying file handle. After this call the
	 *       <strong>File</strong> object is still valid but it can no longer read or
	 *       write data.<br><br>If you want to use the <strong>SetAttr</strong> method
	 *       to modify the attributes of a file you have created, you may want to call
	 *       <strong>Close</strong> first otherwise the file system will set the
	 *       <em>A</em> (archive) attribute on the file whether you want it set or
	 *       not.<br><br>You may also want to close a file manually if you want to
	 *       delete it, as some scripting languages (e.g. <em>JScript</em>) have lazy
	 *       garbage collection and otherwise may keep the file handle open much longer
	 *       than you intend.</p>
	 *
	 */
	Close() {
	}

	/**
	 * <p>Reads data from the file. If you provide a <em>target </em> {@link Blob}&nbsp;as the first parameter, the
	 *       data will be stored in that <strong>Blob</strong>. Otherwise, a
	 *       <strong>Blob</strong> will be created automatically.</p>
	 *       <p>The optional <em>size</em> parameter specifies the number of bytes to
	 *       read - the default behavior is to read the remaining contents of the
	 *       file.</p>
	 *       <p>A maximum of 1 GB (1073741824 bytes) can be read per call, whether a
	 *       size is specified or implicit. To read a larger file, you must call
	 *       <strong>Read</strong> multiple times.</p>
	 *       <p>If you provide a <strong>Blob</strong> then the return value indicates
	 *       the number of bytes read successfully from the file. If a
	 *       <strong>Blob</strong> isn't provided then the return value is the
	 *       automatically created <strong>Blob</strong> - you can use its
	 *       <strong>size</strong> property to discover the number of bytes that were
	 *       read.</p>
	 *       <p>If <strong>Read</strong> returns zero (or an empty
	 *       <strong>Blob</strong>), you can use the <strong>error</strong> property to
	 *       test if anything went wrong, or if the file simply had no more
	 *   data.</p>
	 * @param {blob} target
	 * @param {int} size
	 * @returns {int|Blob}
	 */
	Read(target, size) {
	}

	/**
	 * <p>Moves the read or write cursor within this file. The <em>delta
	 *       </em>parameter specifies how many bytes to move - how this is interpreted
	 *       depends on the optional <em>method</em> parameter:<br><br><em>b</em> -
	 *       move relative to the beginning of the file<br><em>e</em> - move relative
	 *       to the end of the file<br><em>c</em> - move relative to the current
	 *       position (this is the default method)<br><br>The return value is a  <!--?xml:namespace prefix = "c1" /-->{@link FileSize}&nbsp;object indicating
	 *       the new cursor position.</p>
	 * @param {int} delta
	 * @param {string} method
	 * @returns {FileSize}
	 */
	Seek(delta, method) {
	}

	/**
	 * <p>Modifies the attributes of this file. You can either pass a string
	 *       indicating the attributes to set, or a  <!--?xml:namespace prefix = "c1" /--><!--?xml:namespace prefix = "c1" /-->{@link FileAttr}object.&nbsp;When using
	 *       a string, valid attributes are:<br><br><em>a</em> - archive<br><em>c</em>
	 *       - compressed<br><em>e</em> - encrypted<br><em>h</em> -
	 *       hidden<br><em>n</em> - normal<br><em>r</em> - read-only<br><em>s</em> -
	 *       system<br>p - pinned<br>i - non-content indexed<br><br>Note that both
	 *       <em>c</em> and <em>e</em> attributes cannot be set at the same time.</p>
	 *       <p>&nbsp;</p>
	 *       <p>When you pass a string you can also use <strong>+</strong> and
	 *       <strong>-</strong> to turn some attributes on or off without affecting
	 *       others. For example, <strong>SetAttr("-r")</strong> would turn off the
	 *       read-only attribute.<br><br>The return value is <strong>True</strong> if
	 *       the operation was successful.</p>
	 * @param {FileAttr|string} fileattr_or_attributes
	 * @returns {boolean}
	 */
	SetAttr(fileattr_or_attributes) {
	}

	/**
	 * <p>Modifies one or more of the file's timestamps. The <em>create</em> and
	 *       <em>access</em> parameters are optional. If you wish to specify no change
	 *       for a timestamp, specify <strong>0</strong>.<br><br>Timestamps are
	 *       specified as local time - use <strong>SetTimeUTC </strong>to specify them
	 *       as UTC.<br><br>The return value is <strong>True</strong> for
	 *     success.</p>
	 * @param {Date} modify
	 * @param {Date} create
	 * @param {Date} access
	 * @returns {boolean}
	 */
	SetTime(modify, create, access) {
	}

	/**
	 * <p>Modifies one or more of the file's timestamps. The <em>create</em> and
	 *       <em>access</em> parameters are optional. If you wish to specify no change
	 *       for a timestamp, specify <strong>0</strong>.<br><br>Timestamps are
	 *       specified as UTC time - use <strong>SetTime </strong>to specify them as
	 *       local time.<br><br>The return value is <strong>True</strong> for
	 *       success.</p>
	 * @param {Date} modify
	 * @param {Date} create
	 * @param {Date} access
	 * @returns {boolean}
	 */
	SetTimeUTC(modify, create, access) {
	}

	/**
	 * <p>Truncates the file at the current position of the write cursor. You can
	 *       use this in conjunction with the <strong>Seek</strong> method to
	 *       pre-allocate a file's space on disk, for greater performance (i.e. seek to
	 *       the&nbsp;final size of the file, truncate at that point, and then seek
	 *       back to the start and write the data).<br><br>The return value is
	 *       <strong>True</strong> for success.</p>
	 * @returns {boolean}
	 */
	Truncate() {
	}

	/**
	 * <p>Writes data from the specified <strong>Blob</strong> (or array) or
	 *       <em>string</em>&nbsp;to the file.</p>
	 *       <p>By default the entire contents of the <strong>Blob</strong> will be
	 *       written, but you can use the optional <em>from</em> parameter to specify
	 *       the source byte offset, and the <em>size</em> parameter to specify the
	 *       number of bytes to write.</p>
	 *       <p>A maximum of 1 GB (1073741824 bytes) can be written per call, whether a
	 *       size is specified or implicit. To write a larger amount of data, you must
	 *       call <strong>Write</strong> multiple times.</p>
	 *       <p>If you provide a <em>string</em> rather than a Blob, the string will be
	 *       automatically encoded as UTF-8.</p>
	 *       <p>The return value indicates the number of bytes successfully written to
	 *       the file.</p>
	 *       <p>If <strong>Write</strong> returns zero, you can use the
	 *       <strong>error</strong> property to test if anything went wrong or if there
	 *       was simply no data to write (e.g. the specified <strong>Blob</strong> was
	 *       empty).</p>
	 * @param {blob|string} source_or_source
	 * @param {int} from
	 * @param {int} size
	 * @returns {int}
	 */
	Write(source_or_source, from, size) {
	}
} //end class
