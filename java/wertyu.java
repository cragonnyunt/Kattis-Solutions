import java.util.Scanner;

public class wertyu {
	static String[] keyboard = new String[4];
	static {
		keyboard[0] = "`1234567890-=";
		keyboard[1] = "QWERTYUIOP[]\\";
		keyboard[2] = "ASDFGHJKL;'";
		keyboard[3] = "ZXCVBNM,./";
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNext()) {
			String text = scan.next();
			for (char c : text.toCharArray())
				for (int i = 0; i < 4; i++)
					if (keyboard[i].contains(String.valueOf(c)))
						System.out.print(keyboard[i].charAt(Math.max(0, keyboard[i].indexOf(c) - 1)));
			System.out.print(" ");
		}
		scan.close();
	}
}
