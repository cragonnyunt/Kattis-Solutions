import java.util.Scanner;

public class maptiles2 {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String s = scan.next();
		int zoom = s.length();
		int limit_x_start = 0;
		int limit_x_end = (int) Math.pow(2, zoom) - 1;
		int limit_y_start = limit_x_start;
		int limit_y_end = limit_x_end;
		for (char i : s.toCharArray()) {
			switch (i) {
			case '0':
				limit_x_end = (limit_x_end + limit_x_start - 1) / 2;
				limit_y_end = (limit_y_end + limit_y_start - 1) / 2;
				break;
			case '1':
				limit_x_start = (limit_x_start + limit_x_end + 1) / 2;
				limit_y_end = (limit_y_end + limit_y_start - 1) / 2;
				break;
			case '2':
				limit_x_end = (limit_x_end + limit_x_start - 1) / 2;
				limit_y_start = (limit_y_start + limit_y_end + 1) / 2;
				break;
			case '3':
				limit_x_start = (limit_x_start + limit_x_end + 1) / 2;
				limit_y_start = (limit_y_start + limit_y_end + 1) / 2;
				break;
			}
		}
		System.out.printf("%d %d %d", zoom, limit_x_start, limit_y_start);
		scan.close();
	}
}
