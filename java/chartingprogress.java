import java.util.ArrayList;
import java.util.Scanner;

public class chartingprogress {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		ArrayList<Chart> c = new ArrayList<Chart>();
		for (;;) {
			Chart ch = new Chart(scan);
			if (ch.row == 0)
				break;
			c.add(ch);
		}
		for (Chart ch : c)
			ch.getChart();
		scan.close();
	}
}

class Chart {
	int row, col;
	ArrayList<Integer> rowData;

	public Chart(Scanner scan) {
		rowData = null;
		String input;
		while (scan.hasNextLine()) {
			if ((input = scan.nextLine()).isEmpty())
				break;
			if (col == 0)
				col = input.length();
			if (rowData != null) {
				for (int i = 0; i < col; i++)
					if (input.charAt(i) == '*')
						rowData.set(i, 1);
					else if (rowData.get(i) > 0)
						rowData.set(i, rowData.get(i) + 1);
			} else {
				rowData = new ArrayList<>(col);
				for (int i = 0; i < col; i++)
					rowData.add(0);
				for (int i = 0; i < col; i++)
					if (input.charAt(i) == '*')
						rowData.set(i, 1);
			}
			row++;
		}
		if (row > 0)
			rowData.sort(null);
	}

	public void getChart() {
		for (int i = row; i > 0; i--) {
			for (int j = 0; j < col; j++)
				if (rowData.get(j) == i)
					System.out.print("*");
				else
					System.out.print(".");
			System.out.println();
		}
		System.out.println();
	}
}
