import java.util.Arrays;
import java.util.Scanner;

public class multigram {
	static String sort_String(String anagram) {
		char[] ch_array = anagram.toCharArray();
		Arrays.sort(ch_array);
		return new String(ch_array);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String input = scan.next();
		boolean isFound = false;
		for (int i = 1; i <= input.length() / 2; i++) {
			if (input.length() % i == 0) {
				String test_anagram = input.substring(0, i);
				boolean isConsistent = true;
				for (int j = i; j < input.length(); j += i) {
					String current_anagram_sorted = sort_String(input.substring(j, j + i));
					String test_anagram_sorted = sort_String(test_anagram);
					if (!test_anagram_sorted.equals(current_anagram_sorted)) {
						isConsistent = false;
						break;
					}
				}
				if (isConsistent) {
					isFound = true;
					System.out.println(test_anagram);
					break;
				}
			}
		}
		if (!isFound)
			System.out.println("-1");
		scan.close();
	}
}
