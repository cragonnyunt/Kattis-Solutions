import java.util.ArrayList;
import java.util.Scanner;

public class allaboutthatbase {
	static final char[] allBaseType = new char[] { '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f',
			'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'0' };
	static int toBase10(String digits, ArrayList<Character> basedigits) {
		int result = 0;
		for (int i = 0; i < digits.length(); i++)
			result += basedigits.indexOf(digits.charAt(i)) * Math.pow(basedigits.size(), digits.length() - i - 1);
		return result;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int N = scan.nextInt();
		scan.nextLine();
		while (N-- > 0) {
			String[] exp = scan.nextLine().split(" ");
			String X = exp[0];
			String op = exp[1];
			String Y = exp[2];
			String Z = exp[4];
			int minBaseType = 1;
			char maxDigit = Character.MIN_VALUE;
			boolean hasZero = false;
			for (String A : new String[] { X, Y, Z })
				for (char c : A.toCharArray()) {
					if (maxDigit < c)
						maxDigit = c;
					if (!hasZero && c == '0')
						hasZero = true;
				}
			if (maxDigit != '1' || hasZero)
				if (Character.isDigit(maxDigit)) {
					int _base = Character.getNumericValue(maxDigit) + 1;
					minBaseType = _base > 1 ? _base : 2;
				} else
					minBaseType = maxDigit - 'a' + 11;
			StringBuilder sb = new StringBuilder();
			for (int currentBaseType = minBaseType; currentBaseType <= 36; currentBaseType++) {
				int result = 0;
				if (currentBaseType == 1) {
					switch (op) {
					case "+":
						result = X.length() + Y.length();
						break;
					case "-":
						result = X.length() - Y.length();
						break;
					case "*":
						result = X.length() * Y.length();
						break;
					default:
						if (Z.length() * Y.length() == X.length())
							sb.append("1");
						break;
					}
					if (Z.length() == result)
						sb.append("1");
				} else {
					if (currentBaseType == 0)
						currentBaseType = 36;
					ArrayList<Character> currentBaseDigits = new ArrayList<>(currentBaseType);
					if (currentBaseType == 1)
						currentBaseDigits.add('1');
					else if (currentBaseType >= 2 && currentBaseType <= 10)
						for (int i = 0; i < currentBaseType; i++)
							currentBaseDigits.add(String.valueOf(i).charAt(0));
					else {
						for (int i = 0; i < 10; i++)
							currentBaseDigits.add(String.valueOf(i).charAt(0));
						for (int i = 0; i < currentBaseType - 10; i++)
							currentBaseDigits.add((char) ('a' + i));
					}
					int X_int = toBase10(X, currentBaseDigits);
					int Y_int = toBase10(Y, currentBaseDigits);
					int Z_int = toBase10(Z, currentBaseDigits);
					switch (op) {
					case "+":
						result = X_int + Y_int;
						break;
					case "-":
						result = X_int - Y_int;
						break;
					case "*":
						result = X_int * Y_int;
						break;
					default:
						if (X_int != Y_int * Z_int)
							continue;
						else
							result = X_int / Y_int;
						break;
					}
					if (result == Z_int)
						sb.append(allBaseType[currentBaseType - 1]);
				}
			}
			System.out.println(sb.length() == 0 ? "Invalid" : sb);
		}
		scan.close();
	}
}
