import { API_URL, httpClient } from '@/api/http-client/client';
import Block from '@/components/blocks/block';
import BaseLayout from '@/components/common/layout/base-layout';
import ViewGenComponent, { ViewGenComponentProps } from '@/components/view/view-gen';
import { usePathname } from 'next/navigation';

type UrlParams = { params: { id: string } };

const ViewPage = async ({ params }: UrlParams) => {
    const props = await (async () => {
        var props: ViewGenComponentProps = {
            failed: false,
            baseImgUrl: "",
            genImages: []
        };
        console.log(`${API_URL}/view/${params.id}`);
        const res = await httpClient.get<DataServerResponse>(`${API_URL}/view/${params.id}`);
        console.log("res", res);
        if (!res) {
            props.failed = true;
            return props;
        }
        props.baseImgUrl = res.data!.imgUrl;
        props.genImages.push(res.data!.imgUrl);
        return props;
    })();

    return (
        <BaseLayout>
            <Block minHeightScreen>
                <ViewGenComponent failed={props.failed} baseImgUrl={props.baseImgUrl} genImages={props.genImages} />
            </Block>
        </BaseLayout>
    )
}

export default ViewPage;