import java.util.ArrayList;
import java.util.Scanner;

public class falsesecurity {
	static final char[] characters = new char[] { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_', '.', ',', '?' };
	static final String[] codes = new String[] { ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
			"-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--",
			"--..", "..--", "---.", ".-.-", "----" };

	static int getIndex(char[] array, char value) {
		for (int i = 0; i < array.length; i++)
			if (array[i] == value)
				return i;
		return -1;
	}

	static int getIndex(String[] array, String value) {
		for (int i = 0; i < array.length; i++)
			if (array[i].equals(value))
				return i;
		return -1;
	}

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		while (scan.hasNextLine()) {
			String input = scan.nextLine();
			StringBuilder morse = new StringBuilder();
			ArrayList<Integer> lengths = new ArrayList<>();
			int index = 0;
			for (char ch : input.toCharArray()) {
				index = getIndex(characters, ch);
				morse.append(codes[index]);
				lengths.add(codes[index].length());
			}
			index = 0;
			StringBuilder msg = new StringBuilder();
			for (int i = lengths.size() - 1; i >= 0; i--)
				msg.append(characters[getIndex(codes, morse.substring(index, index += lengths.get(i)))]);
			System.out.println(msg);
		}
		scan.close();
	}
}
