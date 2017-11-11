import java.util.HashMap;
import java.util.Scanner;

public class t9spelling {
	static HashMap<String, Integer> keyboard;
	static {
		keyboard = new HashMap<String, Integer>(27);
		keyboard.put(" ", 0);
		keyboard.put("abc", 2);
		keyboard.put("def", 3);
		keyboard.put("ghi", 4);
		keyboard.put("jkl", 5);
		keyboard.put("mno", 6);
		keyboard.put("pqrs", 7);
		keyboard.put("tuv", 8);
		keyboard.put("wxyz", 9);
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int T = scan.nextInt();
		scan.nextLine();
		for (int i = 1; i <= T; i++) {
			String msg = scan.nextLine();
			StringBuilder sb = new StringBuilder();
			int lastKey = -1;
			for (int j = 0; j < msg.length(); j++) {
				int pos = -1;
				int keyCode = -1;
				for (String keys : keyboard.keySet()) {
					char ch = msg.charAt(j);
					if (keys.contains(String.valueOf(ch))) {
						pos = keys.indexOf(ch);
						keyCode = keyboard.get(keys);
					}
				}
				if (lastKey != -1 && keyCode == lastKey)
					sb.append(" ");
				for (int k = 0; k < pos + 1; k++)
					sb.append(keyCode);
				lastKey = keyCode;
			}
			System.out.println("Case #" + i + ": " + sb);
		}
		scan.close();
	}
}
