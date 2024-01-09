import { httpClient } from '@/api/http-client/client';
import Block from '@/components/blocks/block';
import BaseLayout from '@/components/common/layout/base-layout';
import ViewGenComponent, { ViewGenComponentProps } from '@/components/view/view-gen';
import { InferGetServerSidePropsType, GetServerSideProps } from "next";

const getServerSideProps: GetServerSideProps<{ props: ViewGenComponentProps }> = async (context) => {
    const id = context.query.id;
    var props: ViewGenComponentProps = {
        baseImgUrl: "",
        genImages: []
    };
    const res = await httpClient.get<DataServerResponse>(`/view/${id}`);
    props.baseImgUrl = res.data?.imgUrl;
    props.genImages.push(res.data?.imgUrl);
    return {props: { props }};
}


function ViewPage({ props }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <BaseLayout>
            <Block minHeightScreen>
                <ViewGenComponent baseImgUrl={props.baseImgUrl} genImages={props.genImages} />
            </Block>
        </BaseLayout>
    )
}

export default ViewPage;