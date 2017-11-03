import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;

public class fridge {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String input = scan.next();
		HashSet<Character> input_distinct = new HashSet<>();
		for (char ch : input.toCharArray())
			input_distinct.add(ch);
		if (!input_distinct.contains('1'))
			System.out.println("1");
		else if (!input_distinct.contains('2'))
			System.out.println("2");
		else if (!input_distinct.contains('3'))
			System.out.println("3");
		else if (!input_distinct.contains('4'))
			System.out.println("4");
		else if (!input_distinct.contains('5'))
			System.out.println("5");
		else if (!input_distinct.contains('6'))
			System.out.println("6");
		else if (!input_distinct.contains('7'))
			System.out.println("7");
		else if (!input_distinct.contains('8'))
			System.out.println("8");
		else if (!input_distinct.contains('9'))
			System.out.println("9");
		else if (!input_distinct.contains('0'))
			System.out.println("10");
		else {
			HashMap<Character, Integer> char_map = new HashMap<>();
			for (char c : input.toCharArray())
				char_map.put(c, char_map.containsKey(c) ? char_map.get(c) + 1 : 1);
			int minCharCount = Integer.MAX_VALUE;
			for (int i : char_map.values())
				if (minCharCount > i)
					minCharCount = i;
			HashSet<Character> minChars = new HashSet<>();
			for (char c : char_map.keySet())
				if (char_map.get(c) == minCharCount)
					minChars.add(c);
			char minChar = Collections.min(minChars);
			StringBuilder sb = new StringBuilder();
			if (minChar != '0')
				for (int i = 0; i < minCharCount + 1; i++)
					sb.append(minChar);
			else if (minChars.size() == 1) {
				sb.append("1");
				for (int i = 0; i < minCharCount + 1; i++)
					sb.append("0");
			} else {
				minChars.remove('0');
				minChar = Collections.min(minChars);
				for (int i = 0; i < minCharCount + 1; i++)
					sb.append(minChar);
			}
			System.out.println(sb);
		}
		scan.close();
	}
}
