import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import Svg from '@site/static/img/undraw_docusaurus_react.svg';

export default function Homepage(): ReactNode {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					<div className={clsx('col col--6')}>
						<div className="text--center padding-horiz--md">
							<Svg
								className={styles.featureSvg}
								role="img"
							/>
						</div>
					</div>
					<div className={clsx('col col--6')}>
						<div className="padding-horiz--md">
							<Heading as="h3">Maps API</Heading>
							<p>
								Chúng tôi cung cấp các dịch vụ bản đồ kỹ thuật số toàn diện, bao gồm Bản đồ nền, Mã hóa địa lý (Geocoding),
								Điều hướng và Dịch vụ vị trí để hỗ trợ các nhu cầu đa dạng từ cá nhân, doanh nghiệp đến cơ quan chính phủ.
							</p>

							<p>
								API Bản đồ của chúng tôi có thể được tích hợp vào nhiều sản phẩm, nền tảng ứng dụng và giải pháp,
								đặc biệt trong các lĩnh vực như tối ưu hóa tuyến đường vận chuyển, lập kế hoạch du lịch,
								quản lý đội xe, logistics và nhiều lĩnh vực khác trong ngành Công nghệ thông tin.
							</p>

							<h2>Các dịch vụ chính:</h2>
							<ul>
								<li><strong>Dịch vụ Bản đồ (Maps Service):</strong> Cung cấp bản đồ dạng raster và vector, hỗ trợ hiển thị linh hoạt cho các nền tảng web và mobile.</li>
								<li><strong>Dịch vụ Geocoding:</strong> Chuyển đổi giữa địa chỉ và tọa độ để hỗ trợ tìm kiếm vị trí chính xác.</li>
								<li><strong>Dịch vụ Điều hướng (Navigation Service):</strong> Tính toán lộ trình tối ưu với hỗ trợ nhiều phương tiện di chuyển.</li>
								<li><strong>Dịch vụ Vị trí (Location Service):</strong> Cung cấp thông tin về địa giới hành chính và các khu vực liên quan.</li>
							</ul>

							<p>
								API Bản đồ của chúng tôi mang đến giải pháp mạnh mẽ và linh hoạt, giúp doanh nghiệp và tổ chức khai thác tối đa dữ liệu bản đồ
								để nâng cao hiệu suất và tối ưu hóa quy trình hoạt động.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
