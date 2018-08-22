const products = [
  {
    name: 'Product 0', feature1: 30, feature2: 51.6, year: 2015,
  },
  {
    name: 'Product 1', feature1: 167.5, feature2: 59, year: 2015,
  },
  {
    name: 'Product 2', feature1: 159.5, feature2: 49.2, year: 2015,
  },
  {
    name: 'Product 3', feature1: 157, feature2: 63, year: 2015,
  },
  {
    name: 'Product 4', feature1: 155.8, feature2: 53.6, year: 2015,
  },
  {
    name: 'Product 5', feature1: 170, feature2: 59, year: 2015,
  },
  {
    name: 'Product 6', feature1: 159.1, feature2: 47.6, year: 2015,
  },
  {
    name: 'Product 7', feature1: 166, feature2: 69.8, year: 2015,
  },
  {
    name: 'Product 8', feature1: 176.2, feature2: 66.8, year: 2015,
  },
  {
    name: 'Product 9', feature1: 160.2, feature2: 75.2, year: 2015,
  },
  {
    name: 'Product 10', feature1: 172.5, feature2: 55.2, year: 2015,
  },
  {
    name: 'Product 11', feature1: 170.9, feature2: 54.2, year: 2015,
  },
  {
    name: 'Product 12', feature1: 172.9, feature2: 62.5, year: 2015,
  },
  {
    name: 'Product 13', feature1: 153.4, feature2: 42, year: 2015,
  },
  {
    name: 'Product 14', feature1: 160, feature2: 50, year: 2015,
  },
  {
    name: 'Product 15', feature1: 147.2, feature2: 49.8, year: 2015,
  },
  {
    name: 'Product 16', feature1: 168.2, feature2: 49.2, year: 2015,
  },
  {
    name: 'Product 17', feature1: 175, feature2: 73.2, year: 2015,
  },
  {
    name: 'Product 18', feature1: 157, feature2: 47.8, year: 2015,
  },
  {
    name: 'Product 19', feature1: 167.6, feature2: 68.8, year: 2015,
  },
  {
    name: 'Product 20', feature1: 159.5, feature2: 50.6, year: 2015,
  },
  {
    name: 'Product 21', feature1: 175, feature2: 82.5, year: 2015,
  },
  {
    name: 'Product 22', feature1: 166.8, feature2: 57.2, year: 2015,
  },
  {
    name: 'Product 23', feature1: 176.5, feature2: 87.8, year: 2015,
  },
  {
    name: 'Product 24', feature1: 170.2, feature2: 72.8, year: 2015,
  },
  {
    name: 'Product 25', feature1: 174, feature2: 54.5, year: 2015,
  },
  {
    name: 'Product 26', feature1: 173, feature2: 59.8, year: 2015,
  },
  {
    name: 'Product 27', feature1: 179.9, feature2: 67.3, year: 2015,
  },
  {
    name: 'Product 28', feature1: 170.5, feature2: 67.8, year: 2015,
  },
  {
    name: 'Product 29', feature1: 160, feature2: 47, year: 2015,
  },
  {
    name: 'Product 30', feature1: 154.4, feature2: 46.2, year: 2015,
  },
  {
    name: 'Product 31', feature1: 162, feature2: 55, year: 2015,
  },
  {
    name: 'Product 32', feature1: 176.5, feature2: 83, year: 2015,
  },
  {
    name: 'Product 33', feature1: 160, feature2: 54.4, year: 2015,
  },
  {
    name: 'Product 34', feature1: 152, feature2: 45.8, year: 2015,
  },
  {
    name: 'Product 35', feature1: 162.1, feature2: 53.6, year: 2015,
  },
  {
    name: 'Product 36', feature1: 170, feature2: 73.2, year: 2015,
  },
  {
    name: 'Product 37', feature1: 160.2, feature2: 52.1, year: 2015,
  },
  {
    name: 'Product 38', feature1: 161.3, feature2: 67.9, year: 2015,
  },
  {
    name: 'Product 39', feature1: 166.4, feature2: 56.6, year: 2015,
  },
  {
    name: 'Product 40', feature1: 168.9, feature2: 62.3, year: 2015,
  },
  {
    name: 'Product 41', feature1: 163.8, feature2: 58.5, year: 2015,
  },
  {
    name: 'Product 42', feature1: 167.6, feature2: 54.5, year: 2015,
  },
  {
    name: 'Product 43', feature1: 160, feature2: 50.2, year: 2015,
  },
  {
    name: 'Product 44', feature1: 161.3, feature2: 60.3, year: 2015,
  },
  {
    name: 'Product 45', feature1: 167.6, feature2: 58.3, year: 2015,
  },
  {
    name: 'Product 46', feature1: 165.1, feature2: 56.2, year: 2015,
  },
  {
    name: 'Product 47', feature1: 160, feature2: 50.2, year: 2015,
  },
  {
    name: 'Product 48', feature1: 170, feature2: 72.9, year: 2015,
  },
  {
    name: 'Product 49', feature1: 157.5, feature2: 59.8, year: 2015,
  },
  {
    name: 'Product 50', feature1: 167.6, feature2: 61, year: 2015,
  },
  {
    name: 'Product 51', feature1: 160.7, feature2: 69.1, year: 2015,
  },
  {
    name: 'Product 52', feature1: 163.2, feature2: 55.9, year: 2015,
  },
  {
    name: 'Product 53', feature1: 152.4, feature2: 46.5, year: 2015,
  },
  {
    name: 'Product 54', feature1: 157.5, feature2: 54.3, year: 2015,
  },
  {
    name: 'Product 55', feature1: 168.3, feature2: 54.8, year: 2015,
  },
  {
    name: 'Product 56', feature1: 180.3, feature2: 60.7, year: 2015,
  },
  {
    name: 'Product 57', feature1: 165.5, feature2: 60, year: 2015,
  },
  {
    name: 'Product 58', feature1: 165, feature2: 62, year: 2015,
  },
  {
    name: 'Product 59', feature1: 164.5, feature2: 60.3, year: 2015,
  },
  {
    name: 'Product 60', feature1: 156, feature2: 52.7, year: 2015,
  },
  {
    name: 'Product 61', feature1: 160, feature2: 74.3, year: 2015,
  },
  {
    name: 'Product 62', feature1: 163, feature2: 62, year: 2015,
  },
  {
    name: 'Product 63', feature1: 165.7, feature2: 73.1, year: 2015,
  },
  {
    name: 'Product 64', feature1: 161, feature2: 80, year: 2015,
  },
  {
    name: 'Product 65', feature1: 162, feature2: 54.7, year: 2015,
  },
  {
    name: 'Product 66', feature1: 166, feature2: 53.2, year: 2015,
  },
  {
    name: 'Product 67', feature1: 174, feature2: 75.7, year: 2015,
  },
  {
    name: 'Product 68', feature1: 172.7, feature2: 61.1, year: 2015,
  },
  {
    name: 'Product 69', feature1: 167.6, feature2: 55.7, year: 2015,
  },
  {
    name: 'Product 70', feature1: 151.1, feature2: 48.7, year: 2015,
  },
  {
    name: 'Product 71', feature1: 164.5, feature2: 52.3, year: 2015,
  },
  {
    name: 'Product 72', feature1: 163.5, feature2: 50, year: 2015,
  },
  {
    name: 'Product 73', feature1: 152, feature2: 59.3, year: 2015,
  },
  {
    name: 'Product 74', feature1: 169, feature2: 62.5, year: 2015,
  },
  {
    name: 'Product 75', feature1: 164, feature2: 55.7, year: 2015,
  },
  {
    name: 'Product 76', feature1: 161.2, feature2: 54.8, year: 2015,
  },
  {
    name: 'Product 77', feature1: 155, feature2: 45.9, year: 2015,
  },
  {
    name: 'Product 78', feature1: 170, feature2: 70.6, year: 2015,
  },
  {
    name: 'Product 79', feature1: 176.2, feature2: 67.2, year: 2015,
  },
  {
    name: 'Product 80', feature1: 170, feature2: 69.4, year: 2015,
  },
  {
    name: 'Product 81', feature1: 162.5, feature2: 58.2, year: 2015,
  },
  {
    name: 'Product 82', feature1: 170.3, feature2: 64.8, year: 2015,
  },
  {
    name: 'Product 83', feature1: 164.1, feature2: 71.6, year: 2015,
  },
  {
    name: 'Product 84', feature1: 169.5, feature2: 52.8, year: 2015,
  },
  {
    name: 'Product 85', feature1: 163.2, feature2: 59.8, year: 2015,
  },
  {
    name: 'Product 86', feature1: 154.5, feature2: 49, year: 2015,
  },
  {
    name: 'Product 87', feature1: 159.8, feature2: 50, year: 2015,
  },
  {
    name: 'Product 88', feature1: 173.2, feature2: 69.2, year: 2015,
  },
  {
    name: 'Product 89', feature1: 170, feature2: 55.9, year: 2015,
  },
  {
    name: 'Product 90', feature1: 161.4, feature2: 63.4, year: 2015,
  },
  {
    name: 'Product 91', feature1: 169, feature2: 58.2, year: 2015,
  },
  {
    name: 'Product 92', feature1: 166.2, feature2: 58.6, year: 2015,
  },
  {
    name: 'Product 93', feature1: 159.4, feature2: 45.7, year: 2015,
  },
  {
    name: 'Product 94', feature1: 162.5, feature2: 52.2, year: 2015,
  },
  {
    name: 'Product 95', feature1: 159, feature2: 48.6, year: 2015,
  },
  {
    name: 'Product 96', feature1: 162.8, feature2: 57.8, year: 2015,
  },
  {
    name: 'Product 97', feature1: 159, feature2: 55.6, year: 2015,
  },
  {
    name: 'Product 98', feature1: 179.8, feature2: 66.8, year: 2015,
  },
  {
    name: 'Product 99', feature1: 162.9, feature2: 59.4, year: 2015,
  },
  {
    name: 'Product 100', feature1: 161, feature2: 53.6, year: 2015,
  },
  {
    name: 'Product 101', feature1: 151.1, feature2: 73.2, year: 2015,
  },
  {
    name: 'Product 102', feature1: 168.2, feature2: 53.4, year: 2015,
  },
  {
    name: 'Product 103', feature1: 168.9, feature2: 69, year: 2015,
  },
  {
    name: 'Product 104', feature1: 173.2, feature2: 58.4, year: 2015,
  },
  {
    name: 'Product 105', feature1: 171.8, feature2: 56.2, year: 2015,
  },
  {
    name: 'Product 106', feature1: 178, feature2: 70.6, year: 2015,
  },
  {
    name: 'Product 107', feature1: 164.3, feature2: 59.8, year: 2015,
  },
  {
    name: 'Product 108', feature1: 163, feature2: 72, year: 2015,
  },
  {
    name: 'Product 109', feature1: 168.5, feature2: 65.2, year: 2015,
  },
  {
    name: 'Product 0', feature1: 166.8, feature2: 56.6, year: 2016,
  },
  {
    name: 'Product 1', feature1: 172.7, feature2: 105.2, year: 2016,
  },
  {
    name: 'Product 2', feature1: 163.5, feature2: 51.8, year: 2016,
  },
  {
    name: 'Product 3', feature1: 169.4, feature2: 63.4, year: 2016,
  },
  {
    name: 'Product 4', feature1: 167.8, feature2: 59, year: 2016,
  },
  {
    name: 'Product 5', feature1: 159.5, feature2: 47.6, year: 2016,
  },
  {
    name: 'Product 6', feature1: 167.6, feature2: 63, year: 2016,
  },
  {
    name: 'Product 7', feature1: 161.2, feature2: 55.2, year: 2016,
  },
  {
    name: 'Product 8', feature1: 160, feature2: 45, year: 2016,
  },
  {
    name: 'Product 9', feature1: 163.2, feature2: 54, year: 2016,
  },
  {
    name: 'Product 10', feature1: 99, feature2: 50.2, year: 2016,
  },
  {
    name: 'Product 11', feature1: 161.3, feature2: 60.2, year: 2016,
  },
  {
    name: 'Product 12', feature1: 149.5, feature2: 44.8, year: 2016,
  },
  {
    name: 'Product 13', feature1: 157.5, feature2: 58.8, year: 2016,
  },
  {
    name: 'Product 14', feature1: 163.2, feature2: 56.4, year: 2016,
  },
  {
    name: 'Product 15', feature1: 172.7, feature2: 62, year: 2016,
  },
  {
    name: 'Product 16', feature1: 155, feature2: 49.2, year: 2016,
  },
  {
    name: 'Product 17', feature1: 156.5, feature2: 67.2, year: 2016,
  },
  {
    name: 'Product 18', feature1: 164, feature2: 53.8, year: 2016,
  },
  {
    name: 'Product 19', feature1: 160.9, feature2: 54.4, year: 2016,
  },
  {
    name: 'Product 20', feature1: 162.8, feature2: 58, year: 2016,
  },
  {
    name: 'Product 21', feature1: 167, feature2: 59.8, year: 2016,
  },
  {
    name: 'Product 22', feature1: 160, feature2: 54.8, year: 2016,
  },
  {
    name: 'Product 23', feature1: 160, feature2: 43.2, year: 2016,
  },
  {
    name: 'Product 24', feature1: 68.9, feature2: 60.5, year: 2016,
  },
  {
    name: 'Product 25', feature1: 58.2, feature2: 46.4, year: 2016,
  },
  {
    name: 'Product 26', feature1: 156, feature2: 64.4, year: 2016,
  },
  {
    name: 'Product 27', feature1: 160, feature2: 48.8, year: 2016,
  },
  {
    name: 'Product 28', feature1: 67.1, feature2: 62.2, year: 2016,
  },
  {
    name: 'Product 29', feature1: 58, feature2: 55.5, year: 2016,
  },
  {
    name: 'Product 30', feature1: 167.6, feature2: 57.8, year: 2016,
  },
  {
    name: 'Product 31', feature1: 156, feature2: 54.6, year: 2016,
  },
  {
    name: 'Product 32', feature1: 62.1, feature2: 59.2, year: 2016,
  },
  {
    name: 'Product 33', feature1: 173.4, feature2: 52.7, year: 2016,
  },
  {
    name: 'Product 34', feature1: 159.8, feature2: 53.2, year: 2016,
  },
  {
    name: 'Product 35', feature1: 170.5, feature2: 64.5, year: 2016,
  },
  {
    name: 'Product 36', feature1: 159.2, feature2: 51.8, year: 2016,
  },
  {
    name: 'Product 37', feature1: 157.5, feature2: 56, year: 2016,
  },
  {
    name: 'Product 38', feature1: 161.3, feature2: 63.6, year: 2016,
  },
  {
    name: 'Product 39', feature1: 62.6, feature2: 63.2, year: 2016,
  },
  {
    name: 'Product 40', feature1: 60, feature2: 59.5, year: 2016,
  },
  {
    name: 'Product 41', feature1: 68.9, feature2: 56.8, year: 2016,
  },
  {
    name: 'Product 42', feature1: 165.1, feature2: 64.1, year: 2016,
  },
  {
    name: 'Product 43', feature1: 162.6, feature2: 50, year: 2016,
  },
  {
    name: 'Product 44', feature1: 165.1, feature2: 72.3, year: 2016,
  },
  {
    name: 'Product 45', feature1: 166.4, feature2: 55, year: 2016,
  },
  {
    name: 'Product 46', feature1: 160, feature2: 55.9, year: 2016,
  },
  {
    name: 'Product 47', feature1: 152.4, feature2: 60.4, year: 2016,
  },
  {
    name: 'Product 48', feature1: 170.2, feature2: 69.1, year: 2016,
  },
  {
    name: 'Product 49', feature1: 162.6, feature2: 84.5, year: 2016,
  },
  {
    name: 'Product 50', feature1: 170.2, feature2: 55.9, year: 2016,
  },
  {
    name: 'Product 51', feature1: 158.8, feature2: 55.5, year: 2016,
  },
  {
    name: 'Product 52', feature1: 172.7, feature2: 69.5, year: 2016,
  },
  {
    name: 'Product 53', feature1: 167.6, feature2: 76.4, year: 2016,
  },
  {
    name: 'Product 54', feature1: 162.6, feature2: 61.4, year: 2016,
  },
  {
    name: 'Product 55', feature1: 167.6, feature2: 65.9, year: 2016,
  },
  {
    name: 'Product 56', feature1: 156.2, feature2: 58.6, year: 2016,
  },
  {
    name: 'Product 57', feature1: 175.2, feature2: 66.8, year: 2016,
  },
  {
    name: 'Product 58', feature1: 172.1, feature2: 56.6, year: 2016,
  },
  {
    name: 'Product 59', feature1: 162.6, feature2: 58.6, year: 2016,
  },
  {
    name: 'Product 60', feature1: 160, feature2: 55.9, year: 2016,
  },
  {
    name: 'Product 61', feature1: 165.1, feature2: 59.1, year: 2016,
  },
  {
    name: 'Product 62', feature1: 182.9, feature2: 81.8, year: 2016,
  },
  {
    name: 'Product 63', feature1: 166.4, feature2: 70.7, year: 2016,
  },
  {
    name: 'Product 64', feature1: 165.1, feature2: 56.8, year: 2016,
  },
  {
    name: 'Product 65', feature1: 177.8, feature2: 60, year: 2016,
  },
  {
    name: 'Product 66', feature1: 165.1, feature2: 58.2, year: 2016,
  },
  {
    name: 'Product 67', feature1: 175.3, feature2: 72.7, year: 2016,
  },
  {
    name: 'Product 68', feature1: 154.9, feature2: 54.1, year: 2016,
  },
  {
    name: 'Product 69', feature1: 158.8, feature2: 49.1, year: 2016,
  },
  {
    name: 'Product 70', feature1: 172.7, feature2: 75.9, year: 2016,
  },
  {
    name: 'Product 71', feature1: 168.9, feature2: 55, year: 2016,
  },
  {
    name: 'Product 72', feature1: 161.3, feature2: 57.3, year: 2016,
  },
  {
    name: 'Product 73', feature1: 167.6, feature2: 55, year: 2016,
  },
  {
    name: 'Product 74', feature1: 165.1, feature2: 65.5, year: 2016,
  },
  {
    name: 'Product 75', feature1: 175.3, feature2: 65.5, year: 2016,
  },
  {
    name: 'Product 76', feature1: 157.5, feature2: 48.6, year: 2016,
  },
  {
    name: 'Product 77', feature1: 163.8, feature2: 58.6, year: 2016,
  },
  {
    name: 'Product 78', feature1: 167.6, feature2: 63.6, year: 2016,
  },
  {
    name: 'Product 79', feature1: 165.1, feature2: 55.2, year: 2016,
  },
  {
    name: 'Product 80', feature1: 165.1, feature2: 62.7, year: 2016,
  },
  {
    name: 'Product 81', feature1: 168.9, feature2: 56.6, year: 2016,
  },
  {
    name: 'Product 82', feature1: 162.6, feature2: 53.9, year: 2016,
  },
  {
    name: 'Product 83', feature1: 164.5, feature2: 63.2, year: 2016,
  },
  {
    name: 'Product 84', feature1: 176.5, feature2: 73.6, year: 2016,
  },
  {
    name: 'Product 85', feature1: 168.9, feature2: 62, year: 2016,
  },
  {
    name: 'Product 86', feature1: 175.3, feature2: 63.6, year: 2016,
  },
  {
    name: 'Product 87', feature1: 159.4, feature2: 53.2, year: 2016,
  },
  {
    name: 'Product 88', feature1: 160, feature2: 53.4, year: 2016,
  },
  {
    name: 'Product 89', feature1: 70.2, feature2: 55, year: 2016,
  },
  {
    name: 'Product 90', feature1: 62.6, feature2: 70.5, year: 2016,
  },
  {
    name: 'Product 91', feature1: 67.6, feature2: 54.5, year: 2016,
  },
  {
    name: 'Product 92', feature1: 162.6, feature2: 54.5, year: 2016,
  },
  {
    name: 'Product 93', feature1: 160.7, feature2: 55.9, year: 2016,
  },
  {
    name: 'Product 94', feature1: 160, feature2: 59, year: 2016,
  },
  {
    name: 'Product 95', feature1: 157.5, feature2: 63.6, year: 2016,
  },
  {
    name: 'Product 96', feature1: 162.6, feature2: 54.5, year: 2016,
  },
  {
    name: 'Product 97', feature1: 152.4, feature2: 47.3, year: 2016,
  },
  {
    name: 'Product 98', feature1: 170.2, feature2: 67.7, year: 2016,
  },
  {
    name: 'Product 99', feature1: 165.1, feature2: 80.9, year: 2016,
  },
  {
    name: 'Product 100', feature1: 142.7, feature2: 70.5, year: 2016,
  },
  {
    name: 'Product 101', feature1: 135.1, feature2: 60.9, year: 2016,
  },
  {
    name: 'Product 102', feature1: 120.2, feature2: 63.6, year: 2016,
  },
  {
    name: 'Product 103', feature1: 110.2, feature2: 54.5, year: 2016,
  },
  {
    name: 'Product 104', feature1: 130.2, feature2: 59.1, year: 2016,
  },
  {
    name: 'Product 105', feature1: 141.3, feature2: 70.5, year: 2016,
  },
  {
    name: 'Product 106', feature1: 147.6, feature2: 52.7, year: 2016,
  },
  {
    name: 'Product 107', feature1: 167.6, feature2: 62.7, year: 2016,
  },
  {
    name: 'Product 108', feature1: 165.1, feature2: 86.3, year: 2016,
  },
  {
    name: 'Product 109', feature1: 162.6, feature2: 66.4, year: 2016,
  },
  {
    name: 'Product 110', feature1: 152.4, feature2: 67.3, year: 2016,
  },
  {
    name: 'Product 111', feature1: 168.9, feature2: 63, year: 2016,
  },
  {
    name: 'Product 112', feature1: 170.2, feature2: 73.6, year: 2016,
  },
  {
    name: 'Product 113', feature1: 175.2, feature2: 62.3, year: 2016,
  },
  {
    name: 'Product 114', feature1: 175.2, feature2: 57.7, year: 2016,
  },
  {
    name: 'Product 115', feature1: 160, feature2: 55.4, year: 2016,
  },
  {
    name: 'Product 116', feature1: 165.1, feature2: 104.1, year: 2016,
  },
  {
    name: 'Product 117', feature1: 174, feature2: 55.5, year: 2016,
  },
  {
    name: 'Product 118', feature1: 170.2, feature2: 77.3, year: 2016,
  },
  {
    name: 'Product 119', feature1: 160, feature2: 80.5, year: 2016,
  },
  {
    name: 'Product 120', feature1: 167.6, feature2: 64.5, year: 2016,
  },
  {
    name: 'Product 121', feature1: 167.6, feature2: 72.3, year: 2016,
  },
  {
    name: 'Product 122', feature1: 167.6, feature2: 61.4, year: 2016,
  },
  {
    name: 'Product 123', feature1: 154.9, feature2: 58.2, year: 2016,
  },
  {
    name: 'Product 124', feature1: 162.6, feature2: 81.8, year: 2016,
  },
  {
    name: 'Product 125', feature1: 175.3, feature2: 63.6, year: 2016,
  },
  {
    name: 'Product 126', feature1: 171.4, feature2: 53.4, year: 2016,
  },
  {
    name: 'Product 127', feature1: 157.5, feature2: 54.5, year: 2016,
  },
  {
    name: 'Product 128', feature1: 165.1, feature2: 53.6, year: 2016,
  },
  {
    name: 'Product 129', feature1: 160, feature2: 60, year: 2016,
  },
  {
    name: 'Product 130', feature1: 174, feature2: 73.6, year: 2016,
  },
  {
    name: 'Product 131', feature1: 162.6, feature2: 61.4, year: 2016,
  },
  {
    name: 'Product 132', feature1: 174, feature2: 55.5, year: 2016,
  },
  {
    name: 'Product 133', feature1: 162.6, feature2: 63.6, year: 2016,
  },
  {
    name: 'Product 134', feature1: 161.3, feature2: 60.9, year: 2016,
  },
  {
    name: 'Product 135', feature1: 156.2, feature2: 60, year: 2016,
  },
  {
    name: 'Product 136', feature1: 149.9, feature2: 46.8, year: 2016,
  },
  {
    name: 'Product 137', feature1: 169.5, feature2: 57.3, year: 2016,
  },
  {
    name: 'Product 138', feature1: 160, feature2: 64.1, year: 2016,
  },
  {
    name: 'Product 139', feature1: 175.3, feature2: 63.6, year: 2016,
  },
  {
    name: 'Product 140', feature1: 169.5, feature2: 67.3, year: 2016,
  },
  {
    name: 'Product 141', feature1: 160, feature2: 75.5, year: 2016,
  },
  {
    name: 'Product 142', feature1: 172.7, feature2: 68.2, year: 2016,
  },
  {
    name: 'Product 143', feature1: 162.6, feature2: 61.4, year: 2016,
  },
  {
    name: 'Product 144', feature1: 157.5, feature2: 76.8, year: 2016,
  },
  {
    name: 'Product 145', feature1: 176.5, feature2: 71.8, year: 2016,
  },
  {
    name: 'Product 146', feature1: 164.4, feature2: 55.5, year: 2016,
  },
  {
    name: 'Product 147', feature1: 160.7, feature2: 48.6, year: 2016,
  },
  {
    name: 'Product 148', feature1: 174, feature2: 66.4, year: 2016,
  },
  {
    name: 'Product 149', feature1: 163.8, feature2: 67.3, year: 2016,
  },
];

export default products;
