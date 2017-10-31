import java.util.Scanner;

public class arithmetic {
	static String padLeft(String str, int length) {
		return (new String(new char[length]).replace("\0", "0") + str).substring(str.length());
	}

	static String toBinary(String octal) {
		if (octal.equals("0"))
			return "0";
		StringBuilder sb = new StringBuilder(3 * octal.length());
		for (char ch : octal.toCharArray()) {
			int octal_data = Character.getNumericValue(ch);
			String binary_string = Integer.toBinaryString(octal_data);
			sb.append(padLeft(binary_string, 3));
		}
		int length = sb.length();
		int extra_space;
		if ((extra_space = sb.length() % 4) != 0)
			length += 4 - extra_space;
		return padLeft(sb.toString(), length);
	}

	static String toHex(String binary) {
		if (binary.equals("0"))
			return "0";
		StringBuilder sb = new StringBuilder(binary.length() / 4);
		for (int i = 0; i < binary.length(); i += 4) {
			String binary_string = binary.substring(i, i + 4);
			int decimal_data = Integer.parseInt(binary_string, 2);
			String hex_string = Integer.toHexString(decimal_data).toUpperCase();
			sb.append(hex_string);
		}
		return sb.toString().replaceFirst("^0+(?!$)", "");
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String input = scan.next();
		System.out.println(toHex(toBinary(input)));
		scan.close();
	}
}
