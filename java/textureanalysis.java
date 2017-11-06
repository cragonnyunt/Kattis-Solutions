import java.util.Scanner;

public class textureanalysis {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int count = 1;
		String texture;
		while (!(texture = scan.next()).equals("END")) {
			int count_white = -1;
			int preVCount = -1;
			boolean isEven = true;
			for (char c : texture.toCharArray()) {
				if (c == '*') {
					if (count_white != -1) {
						if (preVCount == -1)
							preVCount = count_white;
						else if (preVCount != count_white) {
							isEven = false;
							break;
						}
					}
					count_white = 0;
				} else
					count_white++;
			}
			System.out.println(count++ + " " + (isEven ? "EVEN" : "NOT EVEN"));
		}
		scan.close();
	}
}
