import java.util.Scanner;

public class arithmetic {
	static String toBinary(String octal) {
		if (octal.equals("0"))
			return "0";
		StringBuilder sb = new StringBuilder(3 * octal.length());
		for (char ch : octal.toCharArray()) {
			String binary_str = Integer.toBinaryString(Character.getNumericValue(ch));
			sb.append(("000" + binary_str).substring(binary_str.length()));
		}
		int length = sb.length() + 4 - sb.length() % 4;
		return (new String(new char[length]).replace("\0", "0") + sb).substring(sb.length());
	}

	static String toHex(String binary) {
		if (binary.equals("0"))
			return "0";
		StringBuilder sb = new StringBuilder(binary.length() / 4);
		for (int i = 0; i < binary.length(); i += 4) {
			String binary_str = binary.substring(i, i + 4);
			sb.append(Integer.toHexString(Integer.parseInt(binary_str, 2)).toUpperCase());
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
