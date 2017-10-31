import java.util.Arrays;
import java.util.Scanner;

public class base2palindrome {
	static int[] array = { 0, 1, 2, 4, 6, 10, 14, 22, 30, 46, 62, 94, 126, 190, 254, 382, 510, 766, 1022, 1534, 2046,
			3070, 4094, 6142, 8190, 12286, 16382, 24574, 32766, 49150, 65534 };

	static String getBinary(double bits, int n) {
		return Integer.toBinaryString(n + (int) Math.pow(2, bits - 1));
	}

	static String reverseString(String str) {
		return new StringBuilder(str).reverse().toString();
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int M = scan.nextInt();
		int index = Arrays.binarySearch(array, M);
		int bits = index >= 0 ? index : Math.abs(index) - 1;
		String full_str;
		if (bits % 2 == 0) {
			String first_half_str = getBinary(bits / 2, M - array[bits - 1] - 1);
			full_str = first_half_str + reverseString(first_half_str);
		} else {
			String first_half_str = getBinary(Math.ceil(bits / 2.0), M - array[bits - 1] - 1);
			String first_half_rev_str = reverseString(first_half_str);
			full_str = first_half_str + first_half_rev_str.substring(1);
		}
		System.out.println(Integer.parseInt(full_str, 2));
		scan.close();
	}
}
