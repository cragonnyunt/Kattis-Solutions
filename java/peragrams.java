import java.util.HashMap;
import java.util.Scanner;

public class peragrams {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String str = scan.next();
		HashMap<Character, Integer> char_map = new HashMap<>();
		for (char c : str.toCharArray())
			char_map.put(c, char_map.containsKey(c) ? char_map.get(c) + 1 : 1);
		int count = 0;
		for (int chars : char_map.values())
			if (chars % 2 != 0)
				count++;
		System.out.println(Math.max(0, count - 1));
		scan.close();
	}
}
