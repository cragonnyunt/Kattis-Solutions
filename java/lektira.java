import java.util.Collections;
import java.util.HashMap;
import java.util.Scanner;

public class lektira {
	static String reverseString(String str) {
		return new StringBuilder(str).reverse().toString();
	}

	static String getLektira(String str, int pos) {
		if (pos == 0)
			return new StringBuilder(str).reverse().toString();
		else {
			String test_str = str.substring(0, str.length() - pos);
			char minChar = Character.MIN_VALUE;
			for (char ch : test_str.toCharArray()) {
				if (Character.compare(minChar, ch) > 0)
					minChar = ch;
			}
			HashMap<Integer, String> subString_arrays = new HashMap<>();
			int start = 0;
			int index;
			do {
				index = test_str.indexOf(minChar, start);
				if (index != -1) {
					String sub_str = reverseString(test_str.substring(0, index + 1));
					subString_arrays.put(index, sub_str);
				}
				start = index + 1;
			} while (index != -1);
			int minIndex = -1;
			String min_string = Collections.min(subString_arrays.values());
			for (int i : subString_arrays.keySet())
				if (subString_arrays.get(i).equals(min_string)) {
					minIndex = i;
					break;
				}

			String initial_str = reverseString(str.substring(0, minIndex + 1));
			return initial_str + getLektira(str.substring(minIndex + 1), pos - 1);
		}
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String input = scan.next();
		System.out.println(getLektira(input, 2));
		scan.close();
	}
}
