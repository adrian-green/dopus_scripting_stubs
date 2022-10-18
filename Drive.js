/**
 *The Drive object provides information about a drive (hard drive, CD ROM, etc) on your system. A Vector of drives on your system can be obtained from the FSUtil.Drives method.
 */
class Drive {
	/**
	 * <p>Returns the root of the drive (e.g. <strong>C:\</strong>).</p>
	 * @returns {string}
	 */

	_default_value;
	/**
	 * <p>Returns a  {@link FileSize}&nbsp;object indicating
	 *       the available free space on the drive.</p>
	 * @returns {FileSize}
	 */

	avail;
	/**
	 * <p>Returns the bytes-per-cluster value for the drive.</p>
	 * @returns {int}
	 */

	bpc;
	/**
	 * <p>Returns a string representing the filesystem type.</p>
	 * @returns {string}
	 */

	filesys;
	/**
	 * <p>Returns a value representing filesystem flags for the drive.</p>
	 * @returns {int}
	 */

	flags;
	/**
	 * <p>Returns a  {@link FileSize}&nbsp;object indicating
	 *       the&nbsp;total free space on the drive.</p>
	 * @returns {FileSize}
	 */

	free;
	/**
	 * <p>Returns the drive's label.</p>
	 * @returns {string}
	 */

	label;
	/**
	 * <p>Returns a  {@link FileSize}&nbsp;object indicating
	 *       the&nbsp;total size of the drive.</p>
	 * @returns {FileSize}
	 */

	total;
	/**
	 * <p>Returns a string indicating the drive type (removable, fixed, remote,
	 *       cdrom, ramdisk).</p>
	 * @returns {string}
	 */

	type;
} //end class
